import React, { useState, useEffect } from 'react';
import LineList from '../../../../line-list';
import { getAllSoldiersInTeam, changeSoldierStatus, resetTeamIsHere } from '../../../../api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, useTheme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useParams } from 'react-router-dom';
import { SOLDIER_STATUS } from '../../../../global';
import SoldierStatusAlert from './soldier-status-alert'

const STATES = {
    POPUP: 'POPUP',
    SOLDIERS: 'SOLDIERS',
    RESET: 'RESET',
};

const useStyles = makeStyles((theme) => ({
    title: {
        color: 'black',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '2px solid',
        fontSize: '20px',
        margin: '50px',
    },
    resetButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        minWidth: '100%',
        fontSize: '20px',
        backgroundColor: '#ff5722',
        color: 'white',
        margin: '20px'
    },
    hereButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        minWidth: '100%',
        fontSize: '20px',
        backgroundColor: '#ff5722',
        color: 'white',
        margin: '20px'
    }
}));

const Team = () => {

    const classes = useStyles();
    const theme = useTheme();
    const { teamId } = useParams();
    const [soldiers, setSoldiers] = useState([]);
    const [currentSoldier, setCurrentSoldier] = useState({});
    const [currentState, setCurrentState] = useState(STATES.SOLDIERS);

    useEffect(() => {
        getAllSoldiersInTeam(teamId).then(soldiers => {
            setSoldiers(soldiers)
        });

        setInterval(() => {
            getAllSoldiersInTeam(teamId).then(soldiers => {
                setSoldiers(soldiers)
            });
        }, 5000);
    }, [])

    const onSoldierClick = (soldier) => {
        setCurrentSoldier(soldier);
        setCurrentState(STATES.POPUP);
    }

    const onClose = () => {
        setCurrentState(STATES.SOLDIERS);
    }

    const markSoldierAsMissing = (reason) => {
        setCurrentState(STATES.SOLDIERS);
        changeSoldierStatus(currentSoldier.id, SOLDIER_STATUS.MISSING, reason).then(() => {
            getAllSoldiersInTeam(teamId).then(soldiers => {
                setSoldiers(soldiers)
            });
        });
    }

    const markSoldierAsHere = () => {
        setCurrentState(STATES.SOLDIERS);
        changeSoldierStatus(currentSoldier.id, SOLDIER_STATUS.HERE).then(() => {
            getAllSoldiersInTeam(teamId).then(soldiers => {
                setSoldiers(soldiers)
            });
        });
    }

    const onResetClick = () => {
        setCurrentState(STATES.RESET);
    }

    const onReset = () => {
        setCurrentState(STATES.SOLDIERS);
        resetTeamIsHere(teamId).then(() => {
            getAllSoldiersInTeam(teamId).then(soldiers => {
                setSoldiers(soldiers)
            });
        });
    }

    const columnColorByStatus = (status) => {
        return {
            [SOLDIER_STATUS.HERE]: theme.palette.primary.main,
            [SOLDIER_STATUS.MISSING]: theme.palette.warning.main,
            [SOLDIER_STATUS.UNDEFINED]: theme.palette.grey[500]
        }[status]
    }

    const soldiersNameAndColor = () => {
        const soldiersNameAndColor = soldiers.map((soldier) => ({
            item: soldier,
            color: columnColorByStatus(soldier.status)
        }));

        return soldiersNameAndColor;
    }

    return (
        <>
            <div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography className={classes.title}>
                    <div>
                        {`צוות ${teamId}`}
                    </div>
                </Typography>
                <LineList list={soldiersNameAndColor()} onClick={onSoldierClick} />
                <Button className={classes.resetButton} onClick={onResetClick}>{'אתחול הרשימה'}</Button>
            </div>
            <SoldierStatusAlert isOn={currentState === STATES.POPUP}
                onClose={onClose} soldier={currentSoldier}
                onMarkHereClick={markSoldierAsHere}
                onMarkMissingClick={markSoldierAsMissing} />
            <Dialog
                open={currentState === STATES.RESET}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"רגע"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`אתה בטוח שאתה רוצה לעשות אתחול?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        לא
          </Button>
                    <Button onClick={onReset} color="primary" autoFocus>
                        כן
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Team;
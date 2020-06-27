import React, { useState, useEffect } from 'react';
import LineList from '../../../../line-list';
import { getAllSoldiersInTeam, markSoldier, resetTeamIsHere } from '../../../../api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useParams } from 'react-router-dom';

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
    button: {
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
}));

const Team = () => {

    const classes = useStyles();
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

    const onClick = (soldier) => {
        setCurrentSoldier(soldier);
        setCurrentState(STATES.POPUP);
    }

    const onDisagree = () => {
        setCurrentState(STATES.SOLDIERS);
    }

    const onAccept = () => {
        setCurrentState(STATES.SOLDIERS);
        markSoldier(currentSoldier.id, !currentSoldier.isHere).then(() => {
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

    return (
        <>
            <div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography className={classes.title}>
                    <div>
                        {`צוות ${teamId}`}
                    </div>
                </Typography>
                <LineList list={soldiers} onClick={onClick} />
                <Button className={classes.button} onClick={onResetClick}>{'אתחול הרשימה'}</Button>
            </div>
            <Dialog
                open={currentState === STATES.POPUP}
                onClose={onDisagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"רגע"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {currentSoldier.isHere ? `האם אתה בטוח שאתה רוצה לסמן ש${currentSoldier.name} הלך?`
                            : `האם אתה בטוח שאתה רוצה לסמן ש${currentSoldier.name} כאן?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onDisagree} color="primary">
                        לא
          </Button>
                    <Button onClick={onAccept} color="primary" autoFocus>
                        כן
          </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={currentState === STATES.RESET}
                onClose={onDisagree}
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
                    <Button onClick={onDisagree} color="primary">
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
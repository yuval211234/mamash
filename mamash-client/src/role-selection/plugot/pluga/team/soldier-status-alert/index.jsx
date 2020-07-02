import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, useTheme } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MazevaTitle from '../../../../../mazeva-title';

const useStyles = makeStyles((theme) => ({
    hereButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        minWidth: '100%',
        fontSize: '20px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
    missingButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        minWidth: '100%',
        fontSize: '20px',
        backgroundColor: '#ff5722',
        color: 'white',
        marginTop: '20px'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px'
    },
    topContainer: {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        paddingBottom: '20px'
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        direction: 'rtl',
    },
    titleContainer: {
        marginTop: '20px'
    }
}));

const SoldierStatusAlert = ({ isOn, onClose, soldier, onMarkHereClick, onMarkMissingClick }) => {

    const classes = useStyles();
    const [soldierReason, setSoldierReason] = useState(soldier.reason);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setSoldierReason(soldier.reason);
        setIsError(false)
    }, [soldier])

    const onReasonChange = (event) => {
        setSoldierReason(event.target.value);
    }

    const onMissingClick = () => {
        if (soldierReason === '') {
            setIsError(true)
        }
        else {
            onMarkMissingClick(soldierReason)
        }
    }

    return (
        <>
            <Dialog
                open={isOn}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`מה המצב של ${soldier.name}?`}</DialogTitle>
                <DialogContent className={classes.container}>
                    <DialogContentText id="alert-dialog-description">
                        <div className={classes.topContainer}>
                            <Button className={classes.hereButton} onClick={onMarkHereClick} >{'החייל כאן'} </Button>
                        </div>
                        <div className={classes.bottomContainer}>
                            <div className={classes.titleContainer}>
                                <MazevaTitle title={'חסר'} />
                            </div>
                            <TextField style={{ marginTop: '20px' }} onChange={onReasonChange} placeholder={'למה הוא חסר'} value={soldierReason} />
                            {isError ?
                                <div style={{ color: 'red' }}>
                                    {'השדה של החסר חייב להכיל ערך'}
                                </div> : null}
                            <Button className={classes.missingButton} onClick={onMissingClick}>{'החייל חסר'}</Button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default SoldierStatusAlert;
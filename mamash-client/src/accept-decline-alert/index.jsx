import React, { useState, useEffect } from 'react';
import { getAllSoldiersInTeam, changeSoldierStatus, resetTeamIsHere } from '../api';
import { makeStyles } from '@material-ui/core/styles';
import { Button, useTheme } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

const AcceptDeclineAlert = ({open, onClose, onAccept, title, message}) => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        לא
          </Button>
                    <Button onClick={onAccept} color="primary" autoFocus>
                        כן
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AcceptDeclineAlert;
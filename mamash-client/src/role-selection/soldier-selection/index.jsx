import React, { useState, useEffect } from 'react';
import { getAllSoldiers, changeSoldierStatus } from '../../api';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { SOLDIER_STATUS } from '../../global';

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
    selection: {
        width: '100px',
        margin: '5px'
    }
}));

const SoldierSelection = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [soldiers, setSoldiers] = useState([]);
    const [currentSoldier, setCurrentSoldier] = useState({});
    const [search, setSearch] = useState('');
    const [isCheck, setIsCheck] = useState(false);

    useEffect(() => {
        getAllSoldiers().then(newSoldiers => {
            setSoldiers(newSoldiers);
        });
    }, [])

    const onSelect = (soldier) => () => {
        if (soldier.status !== SOLDIER_STATUS.HERE) {
            setCurrentSoldier(soldier);
            setIsCheck(true);
        }

    }

    const onDisagree = () => {
        setIsCheck(false);
    }

    const onAccept = () => {
        setIsCheck(false);
        changeSoldierStatus(currentSoldier.id, SOLDIER_STATUS.HERE).then(() => {
            getAllSoldiers().then(newSoldiers => {
                setSoldiers(newSoldiers);
            });
        });

    }


    const onSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <>
            <div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography className={classes.title}>
                    <div>
                        {'סמן שאתה נוכח'}
                    </div>
                </Typography>
            </div>
            <TextField onChange={onSearch} />
            <div>
                {
                    soldiers.filter(soldier => search !== '' && soldier.name.includes(search)).map(soldier => (
                        <Button className={classes.selection} style={soldier.status === SOLDIER_STATUS.HERE ? {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.secondary.main
                        } : {
                                backgroundColor: '#9e9e9e',
                                color: theme.palette.secondary.main
                            }}
                            onClick={onSelect(soldier)}>
                            {soldier.name}
                        </Button>
                    ))
                }
            </div>
            <Dialog
                open={isCheck}
                onClose={onDisagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"רגע"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`האם אתה בטוח שאתה רוצה לסמן ש${currentSoldier.name} כאן?`}
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
        </>
    );

}

export default SoldierSelection;
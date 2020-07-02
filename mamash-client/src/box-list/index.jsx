import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        width: '100px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        position: 'relative',
        margin: '20px'
    },
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: '20px',
    }
}));

const BoxList = ({ list, onClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                list.map((item) =>
                    <Button className={classes.box} elevation={6} onClick={() => onClick(item)}>
                        <Typography className={classes.title}>{item.name}</Typography>
                    </Button>
                )
            }
        </div>
    );
}

export default BoxList;
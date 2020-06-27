import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60px',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        position: 'relative',
        marginTop: '5px',
        marginBottom: '5px'
    },
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: '10px',
    }
}));

const Line = ({ item, onClick }) => {
    const classes = useStyles();

    const onLineClick = () => {
        onClick(item)
    }

    return (

        <Button className={classes.box} style={item.isHere? {} : {backgroundColor: '#9e9e9e'}} elevation={6} onClick={onLineClick}>
            <Typography className={classes.title}>{item.name}</Typography>
        </Button>

    );
}

export default Line;
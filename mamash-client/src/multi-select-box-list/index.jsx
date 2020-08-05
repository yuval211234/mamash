import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        position: 'relative',
        margin: '2px'
    },
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 'auto',
    }
}));

const MultiSelectBoxList = ({ list, onClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                list.map((item) =>
                    <Button className={classes.box} style={item.isOn?{}:{backgroundColor: '#9e9e9e'}} elevation={6} onClick={() => onClick(item)}>
                        <Typography className={classes.title}>{item.name}</Typography>
                    </Button>
                )
            }
        </div>
    );
}

export default MultiSelectBoxList;
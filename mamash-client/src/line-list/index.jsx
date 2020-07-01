import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Line from './line/index';

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        position: 'relative',
        marginTop: '20px',
        marginBottom: '20px'
    },
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: '30px',
    }
}));

const LineList = ({ list, onClick }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                list.map(({item, color}) =>
                    <Line item={item} color={color} onClick={onClick} />
                )
            }
        </div>
    );
}

export default LineList;
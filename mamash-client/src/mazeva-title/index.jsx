import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: '2px',
        fontSize: '20px',
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        width: 'fit-content',
    },
}));

const MazevaTitle = ({title}) => {

    const classes = useStyles();

    return (
        <Typography className={classes.title}>
            {`${title}:`}
        </Typography>
    );

}

export default MazevaTitle;
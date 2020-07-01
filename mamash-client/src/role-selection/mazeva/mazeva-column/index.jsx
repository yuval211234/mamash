import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MazevaTitle from '../mazeva-title';

const useStyles = makeStyles((theme) => ({
    column: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}));

const MazevaColumn = ({ title, string }) => {

    const classes = useStyles();

    return (
        <div className={classes.column}>
            <MazevaTitle title={title} />
            <Typography>
                {string}
            </Typography>
        </div>
    );

}

export default MazevaColumn;
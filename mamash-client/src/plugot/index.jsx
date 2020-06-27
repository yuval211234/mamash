import React, { useState, useEffect } from 'react';
import BoxList from '../box-list';
import { getAllPlugot } from '../api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Pluga from './pluga/index';

const STATES = {
    PLUGOT: 'PLUGOT',
    PLUGA: 'PLUGA',
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
}));

const Plugot = ({isHome, setNotHome}) => {

    const classes = useStyles();

    const [plugot, setPlugot] = useState([]);
    const [pluga, setPluga] = useState('');

    useEffect(() => {
        setPlugot(getAllPlugot());
    }, [])

    const onClick = (pluga) => {
        setPluga(pluga);
        setNotHome();
    }

    return {
        [STATES.PLUGOT]: (<div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography className={classes.title}>
                <div>
                    {'פלוגות'}
                </div>
            </Typography>
            <BoxList list={plugot} onClick={onClick} />
        </div>),
        [STATES.PLUGA]:(
            <Pluga pluga={pluga}/>
        )
    }[isHome? STATES.PLUGOT: STATES.PLUGA];
}

export default Plugot;
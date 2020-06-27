import React, { useState, useEffect } from 'react';
import BoxList from '../../box-list';
import { getAllPlugot } from '../../api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Pluga from './pluga/index';
import { useHistory, Switch, Route, useRouteMatch } from 'react-router-dom';

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

const Plugot = () => {

    const classes = useStyles();

    const history = useHistory();

    const [plugot, setPlugot] = useState([]);

    const match = useRouteMatch();

    useEffect(() => {
        setPlugot(getAllPlugot());
    }, [])

    const onClick = (pluga) => {
        history.push(`${match.url}/${pluga.id}`);
    }

    return (
        <>
            <Switch>
            <Route path={`${match.url}/:plugaId`}>
                    <Pluga />
                </Route>
                <Route path={`${match.url}`}>
                    <div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography className={classes.title}>
                            <div>
                                {'פלוגות'}
                            </div>
                        </Typography>
                        <BoxList list={plugot} onClick={onClick} />
                    </div>
                </Route>
            </Switch>
        </>
    );

}

export default Plugot;
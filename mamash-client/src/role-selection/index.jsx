import React, { useState, useEffect } from 'react';
import BoxList from '../box-list';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Switch, Route, useRouteMatch, withRouter } from 'react-router-dom';
import Plugot from './plugot/index';
import SoldierSelection from './soldier-selection';

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

const RoleSelection = ({ setTheme }) => {

    const classes = useStyles();

    const history = useHistory();

    const [roles, setRoles] = useState([]);

    const match = useRouteMatch();

    useEffect(() => {
        setRoles([{ name: 'צוער', englishName: 'normal' }, { name: 'ממש', englishName: 'mamash' }]);
    }, [])

    

    const onClick = (role) => {
        history.push(`/${role.englishName}`);
    }

    return (
        <>
            <Switch>
                <Route path={`/mamash`}>
                    <Plugot />
                </Route>
                <Route path={`/normal`}>
                    <SoldierSelection />
                </Route>
                <Route path={`/`}>
                    <div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography className={classes.title}>
                            <div>
                                {'תפקידים'}
                            </div>
                        </Typography>
                        <BoxList list={roles} onClick={onClick} />
                    </div>
                </Route>
            </Switch>
        </>
    );

}

export default RoleSelection;
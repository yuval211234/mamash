import React, { useState, useEffect } from 'react';
import BoxList from '../box-list';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Switch, Route, useRouteMatch, withRouter } from 'react-router-dom';
import Plugot from './plugot/index';
import SoldierSelection from './soldier-selection';
import { ROLES_NAMES, ROLES } from '../global';
import Mazeva from './mazeva';

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

    const roleToComponentFunc = (roleEnglishName) => {
        const rolesToComponent = {
            [ROLES_NAMES.NORMAL]: <SoldierSelection />,
            [ROLES_NAMES.MAMASH]: <Plugot />,
            [ROLES_NAMES.SAMAP]: <Mazeva />
        }
        return rolesToComponent[roleEnglishName];
    }

    useEffect(() => {
        setRoles(ROLES);
    }, [])



    const onClick = (role) => {
        history.push(`/${role.englishName}`);
    }

    return (
        <>
            <Switch>
                {roles.map(role => (
                    <Route path={`/${role.englishName}`}>
                        {roleToComponentFunc(role.englishName)}
                    </Route>
                ))}
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
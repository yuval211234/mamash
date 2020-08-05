import React, { useState, useEffect } from 'react';
import BoxList from '../../../box-list';
import Team from './team/index';
import { getAllTeamsInPluga } from '../../../api/api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

const STATES = {
    PLUGA: 'PLUGA',
    TEAM: 'TEAM',
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

const Pluga = () => {

    const classes = useStyles();
    const { plugaId } = useParams();
    const history = useHistory();
    const match = useRouteMatch();
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getAllTeamsInPluga(plugaId).then(teams => {
            setTeams(teams)
        })
    }, [])

    const onClick = (team) => {
        history.push(`${match.url}/${team.id}`);
    }

    return (
        <>
            <Switch>
                <Route path={`${match.url}/:teamId`}>
                    <Team team />
                </Route>
                <Route path={`${match.url}`}>
                    <div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography className={classes.title}>
                            <div>
                                {`פלוגת ${plugaId}`}
                            </div>
                        </Typography>
                        <BoxList list={teams} onClick={onClick} />
                    </div>
                </Route>
            </Switch>
        </>
    );

}

export default Pluga;
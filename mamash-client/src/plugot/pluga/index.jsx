import React, { useState, useEffect } from 'react';
import BoxList from '../../box-list';
import Team from './team/index';
import { getAllTeamsInPluga } from '../../api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const Pluga = ({pluga}) => {

    const classes = useStyles();

    const [teams, setTeams] = useState([]);
    const [team, setTeam] = useState('');
    const [currentState, setCurrentState] = useState(STATES.PLUGA);

    useEffect(() => {
        setTeams(getAllTeamsInPluga(pluga.id));
    }, [])

    const onClick = (team) => {
        setTeam(team);
        setCurrentState(STATES.TEAM);
    }

    return {
        [STATES.PLUGA]: (<div style={{ height: '100%', width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography className={classes.title}>
                <div>
                    {`פלוגת ${pluga.name}`}
                </div>
            </Typography>
            <BoxList list={teams} onClick={onClick} />
        </div>),
        [STATES.TEAM]:(
            <Team team={team}/>
        )
    }[currentState];
}

export default Pluga;
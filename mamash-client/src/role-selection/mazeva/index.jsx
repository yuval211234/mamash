import React, { useState, useEffect } from 'react';
import BoxList from '../../box-list';
import { getAllPlugot, resetAllTeams, getAllTeamsInPluga } from '../../api/api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Switch, Route, useRouteMatch } from 'react-router-dom';
import { getAllSoldiers } from '../../api/api';
import { TextField, Paper, Button } from '@material-ui/core';
import MazevaTitle from '../../mazeva-title';
import MazevaColumn from './mazeva-column';
import { SOLDIER_STATUS } from '../../global';
import AcceptDeclineAlert from '../../accept-decline-alert';
import MultiSelectBoxList from '../../multi-select-box-list';

const useStyles = makeStyles((theme) => ({
    title: {
        color: 'black',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottom: '2px solid',
        fontSize: '20px',
        marginTop: '50px',
        marginBottom: '20px'
    },
    column: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        minWidth: '100%',
        fontSize: '20px',
        backgroundColor: '#ff5722',
        color: 'white',
        marginTop: '20px'
    },
    multiSelect: {
        width: '100%',
        marginBottom: '30px'
    }
}));

const Mazeva = () => {

    const [soldiers, setSoldiers] = useState([]);
    const classes = useStyles();
    const [isResetOpen, setIsResetOpen] = useState(false);
    const [selectedTeams, setSelectedTeams] = useState([]);


    useEffect(() => {
        getAllSoldiers().then(newSoldiers => {
            setSoldiers(newSoldiers);
        });

        getAllTeamsInPluga().then(teams => {
            setSelectedTeams(teams.map(team => ({
                ...team,
                isOn: true
            })));
        })

        setInterval(() => {
            getAllSoldiers().then(newSoldiers => {
                setSoldiers(newSoldiers);
            });
        }, 5000);
    }, [])

    const selectedSoldier = soldiers.filter(soldier => selectedTeams.filter(selectedTeam => selectedTeam.isOn).map(selectedTeam => selectedTeam.id).includes(soldier.teamId))
    const allPresentSoldiers = selectedSoldier.filter(({ status }) => status === SOLDIER_STATUS.HERE);
    const allNonPresentSoldiers = selectedSoldier.filter(({ status }) => status !== SOLDIER_STATUS.HERE);

    const resetAllSoldiers = () => {
        resetAllTeams();
        setIsResetOpen(false);
    }

    const onClose = () => {
        setIsResetOpen(false);
    }

    const onResetClick = () => {
        setIsResetOpen(true);
    }

    const onSelectTeam = (teamToSwitch) => {
        const newSelectedTeams = selectedTeams.map(team => {
            if (team.id === teamToSwitch.id) {
                return {
                    ...team,
                    isOn: !team.isOn
                }
            }

            return team;
        })

        setSelectedTeams(newSelectedTeams);
    }

    return (
        <>
            <div style={{ width: '80%', display: 'flex', flex: '1', flexDirection: 'column' }}>
                <Typography className={classes.title}>
                    <div>
                        {`סמ"פ`}
                    </div>
                </Typography>
                <div className={classes.multiSelect}>
                <MultiSelectBoxList list={selectedTeams} onClick={onSelectTeam} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <MazevaColumn title={'מצ"ל'} string={soldiers.length} />
                        <MazevaColumn title={'מצ"נ'} string={allPresentSoldiers.length} />
                        <MazevaColumn title={'חסרים'} string={allNonPresentSoldiers.length} />
                    </div >
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <MazevaTitle title={'תאריך'} />
                        <Typography>
                            {(new Date()).toLocaleString()}
                        </Typography>
                        <MazevaTitle title={'מקום'} />
                        <TextField>
                        </TextField>
                    </div>
                </div>
                <div>
                    <MazevaTitle title={'פירוט'} />
                    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                        {allNonPresentSoldiers.map(soldier => (
                            <Typography style={{}}>
                                {`${soldier.name} - ${soldier.reason ? soldier.reason : 'אין סיבה'}`}
                            </Typography>
                        ))}
                    </div>
                </div>
                <div>
                    <Button className={classes.button} onClick={onResetClick}>אתחל מצבה</Button>
                </div>
            </div>
            <AcceptDeclineAlert
                open={isResetOpen}
                onClose={onClose}
                onAccept={resetAllSoldiers}
                title={"רגע"}
                message={`אתה בטוח שאתה רוצה לעשות אתחול?`} />
        </>
    );

}

export default Mazeva;
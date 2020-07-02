import React, { useState, useEffect } from 'react';
import BoxList from '../../box-list';
import { getAllPlugot } from '../../api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Switch, Route, useRouteMatch } from 'react-router-dom';
import { getAllSoldiers } from '../../api';
import { TextField, Paper } from '@material-ui/core';
import MazevaTitle from '../../mazeva-title';
import MazevaColumn from './mazeva-column';
import { SOLDIER_STATUS } from '../../global';

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
        marginBottom: '50px'
    },
    column: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}));

const Mazeva = () => {

    const [soldiers, setSoldiers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllSoldiers().then(newSoldiers => {
            setSoldiers(newSoldiers);
        });

        setInterval(() => {
            getAllSoldiers().then(newSoldiers => {
                setSoldiers(newSoldiers);
            });
        }, 5000);
    }, [])

    const allPresentSoldiers = soldiers.filter(({ status }) => status === SOLDIER_STATUS.HERE);
    const allNonPresentSoldiers = soldiers.filter(({ status }) => status !== SOLDIER_STATUS.HERE);

    return (
        <>
            <div style={{ width: '80%', display: 'flex', flex: '1', flexDirection: 'column' }}>
                <Typography className={classes.title}>
                    <div>
                        {`סמ"פ`}
                    </div>
                </Typography>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                        <MazevaColumn title={'מצ"ל'} string={soldiers.length} />
                        <MazevaColumn title={'מצ"נ'} string={allPresentSoldiers.length} />
                        <MazevaColumn title={'חסרים'} string={allNonPresentSoldiers.length} />
                        <div>
                            <MazevaTitle title={'פירוט'} />
                            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                                {allNonPresentSoldiers.map(soldier => (
                                    <Typography>
                                        {`${soldier.name} - ${soldier.reason? soldier.reason: 'אין סיבה'}`}
                                    </Typography>
                                ))}
                            </div>
                        </div>
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
            </div>
        </>
    );

}

export default Mazeva;
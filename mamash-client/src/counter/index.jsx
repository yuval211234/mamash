import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { SOLDIER_STATUS } from '../global';


const teamSoldierCounter = (soldiers) => {
    return soldiers.filter(soldier => soldier.status === SOLDIER_STATUS.HERE).length;
}

const Counter = ({soldierList}) => {
    return (
        <div>
            <Typography>
            {teamSoldierCounter(soldierList)} / {soldierList.length}
            </Typography>
        </div>
    );

}

export default Counter;
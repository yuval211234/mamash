import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';


const teamSoldierCounter = (soldiers) => {
    return soldiers.filter(soldier => soldier.isHere == true).length;
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
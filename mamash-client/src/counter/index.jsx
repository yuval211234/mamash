import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';


const teamSoldierCounter = (soldiers) => {
    return soldiers.filter(soldier => soldier.isHere == true).length;
}

const Counter = (props) => {
    return (
        <div>
            <Typography>
            {teamSoldierCounter(props.soldierList)} / {props.soldierList.length}
            </Typography>
        </div>
    );

}

export default Counter;
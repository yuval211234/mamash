//const serverUrl = 'http://18.223.131.250';
const serverUrl = 'http://localhost:80';

const getAllPlugot = () => {
    return [{
        id: 'בנטל',
        name: 'בנטל'
    }];
}

const getAllTeamsInPluga = () => {
    return [
        {
            id: '5',
            name: 'צוות 5'
        },
        {
            id: '6',
            name: 'צוות 6'
        },
        {
            id: '7',
            name: 'צוות 7'
        },
        {
            id: '8',
            name: 'צוות 8'
        },
    ];
}

const getAllSoldiersInTeam = async (teamId) => {
    const soldiers = await (await fetch(`${serverUrl}/soldiers/${teamId}`)).json();
    return soldiers;
}

const getAllSoldiers = async () => {
    const soldiers = await (await fetch(`${serverUrl}/soldiers`)).json();
    return soldiers;
}

const changeSoldierStatus = async (soldierId, soldierStatus, soldierReason) => {
    await fetch(`${serverUrl}/changeStatus/${soldierId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            soldierStatus,
            soldierReason
        }),
    });
}

const resetTeamIsHere = async (teamId) => {
    await fetch(`${serverUrl}/resetIsHere/${teamId}`, {
        method: 'POST'
    });
}

const resetAllTeams = async () => {
    await fetch(`${serverUrl}/resetAllTeams`, {
        method: 'POST'
    });  
}


export {
    resetTeamIsHere,
    getAllPlugot,
    getAllTeamsInPluga,
    changeSoldierStatus,
    getAllSoldiersInTeam,
    getAllSoldiers,
    resetAllTeams
}
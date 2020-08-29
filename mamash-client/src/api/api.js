const serverUrl = 'http://localhost';

const getAllPlugot = async () => {
    const plugot = await (await fetch(`${serverUrl}/plugot`)).json();
    return plugot;
}

const getAllTeamsInPluga = async (plugaId) => {
    const teams = await (await fetch(`${serverUrl}/teams/${plugaId}`)).json();
    return teams;
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
    return await fetch(`${serverUrl}/changeStatus/${soldierId}`, {
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
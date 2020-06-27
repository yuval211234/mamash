const serverUrl = 'http://18.223.131.250';

const getAllPlugot = () => {
    return [{
        id: '123',
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

const markSoldier = async (soldierId) => {
    await fetch(`${serverUrl}/markSoldier/${soldierId}`, {
        method: 'POST'
    });
}

const resetTeamIsHere = async (teamId) => {
    await fetch(`${serverUrl}/resetIsHere/${teamId}`, {
        method: 'POST'
    });
}

export {
    resetTeamIsHere,
    getAllPlugot,
    getAllTeamsInPluga,
    markSoldier,
    getAllSoldiersInTeam
}
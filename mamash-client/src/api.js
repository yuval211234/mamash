const serverUrl = 'http://localhost';

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

const markSoldier = async (soldierId, isHere) => {
    await fetch(`${serverUrl}/markSoldier/${soldierId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isHere
        }),
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
    getAllSoldiersInTeam,
    getAllSoldiers
}
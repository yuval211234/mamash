import { Soldier } from "./types/soldier";

export let getSoldiers = () => {
    const soldiers: Soldier[] = [
        {
            id: '1',
            name: 'יובל פורמן אסא',
            teamId: '1',
            status: 'undefined',
            reason: ''
        },

    ]

    return soldiers;
}

export const getTeams = () => [
    {
        id: '1',
        name: 'צוות 1',
    },
    {
        id: '2',
        name: 'צוות 2',
    },
    {
        id: '3',
        name: 'צוות 3',
    },
    {
        id: '4',
        name: 'צוות 4',
    },
    {
        id: '5',
        name: 'צוות 5',
    },
    {
        id: '6',
        name: 'צוות 6',
    },
]

export const getPlugot = () => [{
    id: 'השלמה טכנולוגית',
    name: 'השלמה טכנולוגית'
}];

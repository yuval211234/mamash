const {SOLDIER_STATUS} = require('./globals');

let getSoldiers = () => {
        const soldiers = [
            {
                id:'1',
                name: 'יובל פורמן אסא',
                teamId: '1',
            },
            
        ]

        return soldiers.map(soldier => {
            soldier.status = SOLDIER_STATUS.UNDEFINED;
            soldier.reason = '';

            return soldier;
        })
    }

const getTeams = () => [
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

const getPlugot = () => [{
    id: 'השלמה טכנולוגית',
    name: 'השלמה טכנולוגית'
}];

module.exports = {
    getSoldiers,
    getTeams,
    getPlugot
}
const express = require('express')
const cors = require('cors')
const { getSoldiers } = require('./soldiers')
const app = express()
const port = 80

let soldiers = getSoldiers();

app.use(express.static('client'))

app.use(cors());

app.get('/soldiers/:teamId', (req, res) => {
    const soldiersInTeam = soldiers.filter(soldier => soldier.teamId === req.params.teamId);
    res.send(soldiersInTeam);
}
);

app.post('/markSoldier/:soldierId', (req, res) => {
    soldiers = soldiers.map(soldier => {
        if (soldier.id === req.params.soldierId) {
            let newSoldier = soldier;
            newSoldier.isHere = !soldier.isHere;
            return newSoldier;
        }
        return soldier;
    });
    res.send('success');
}
);

app.post('/resetIsHere/:teamId', (req, res) => {
    soldiers = soldiers.map(soldier => {
        if (soldier.teamId === req.params.teamId) {
            let newSoldier = soldier;
            newSoldier.isHere = false;
            return newSoldier;
        }
        return soldier;
    });
    res.send('success');
}
);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
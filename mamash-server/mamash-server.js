const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { getSoldiers } = require('./soldiers')
const path = require('path');
const {SOLDIER_STATUS} = require('./globals');
const app = express()
const port = 80

let soldiers = getSoldiers();

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'client')))

app.use(cors());

app.get('/soldiers/:teamId', (req, res) => {
    const soldiersInTeam = soldiers.filter(soldier => soldier.teamId === req.params.teamId);
    res.send(soldiersInTeam);
}
);

app.get('/soldiers/', (req, res) => {
    res.send(soldiers);
}
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'))
});

const changeSoldierStatusAndReason = (soldier, status, reason) => {
    const newSoldier = soldier;
    newSoldier.status = status;
    newSoldier.reason = status === SOLDIER_STATUS.MISSING && reason ? reason : '';
    return newSoldier;
}

app.post('/changeStatus/:soldierId', (req, res) => {
    soldiers = soldiers.map(soldier => {
        if (soldier.id === req.params.soldierId) {
            const newSoldier = changeSoldierStatusAndReason(soldier, req.body.soldierStatus, req.body.soldierReason);
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
            const newSoldier = changeSoldierStatusAndReason(soldier, req.body.soldierStatus, req.body.soldierReason);
            return newSoldier;
        }
        return soldier;
    });
    res.send('success');
}
);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
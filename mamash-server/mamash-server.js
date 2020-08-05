const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { getSoldiers, getTeams, getPlugot } = require('./soldiers')
const path = require('path');
const {SOLDIER_STATUS} = require('./globals');
const fileLogger = require('./loggers/file-logger')
const app = express()
const port = 80

let soldiers = getSoldiers();

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'client')))

app.use(cors());

const changeSoldierStatus = (soldier, newStatus) => {
    const prevStatus = soldier.status;
    soldier.status = newStatus;
    if(newStatus === SOLDIER_STATUS.HERE){
        soldier.reason = '';
    } 
    fileLogger.info({...soldier, prevStatus, action: 'statusChange'});
}

app.get('/soldiers/:teamId', (req, res) => {
    const soldiersInTeam = soldiers.filter(soldier => soldier.teamId === req.params.teamId);
    res.send(soldiersInTeam);
}
);

app.get('/soldiers/', (req, res) => {
    res.send(soldiers);
}
);

app.get('/teams/:plugaId', (req, res) => {
    res.send(getTeams());
}
);

app.get('/plugot/', (req, res) => {
    res.send(getPlugot());
}
);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'))
});

app.post('/changeStatus/:soldierId', (req, res) => {
    soldiers = soldiers.map(soldier => {
        if (soldier.id === req.params.soldierId) {
            const newSoldier = soldier;
            newSoldier.reason = req.body.soldierReason;
            changeSoldierStatus(newSoldier, req.body.soldierStatus);
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
            const newSoldier = soldier;
            changeSoldierStatus(newSoldier, SOLDIER_STATUS.UNDEFINED);
            return newSoldier;
        }
        return soldier;
    });
    res.send('success');
    fileLogger.info({teamId: req.params.teamId, action: 'resetStatusForTeam'});
}
);

app.post('/resetAllTeams', (req,res) => {
    soldiers = soldiers.map(soldier => {
        const newSoldier = soldier;
        changeSoldierStatus(newSoldier, SOLDIER_STATUS.UNDEFINED);
        return newSoldier;
    });
    res.send('success');
    fileLogger.info({action: 'resetStatusForAllTeams'});
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
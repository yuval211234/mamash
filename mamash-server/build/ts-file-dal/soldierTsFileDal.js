"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_logger_1 = require("../loggers/file-logger");
let soldierWithoutDefaults = [
    {
        id: '1',
        name: 'ליאור גל',
        teamId: '4',
    },
    {
        id: '2',
        name: 'אלון רול',
        teamId: '4',
    },
    {
        id: '3',
        name: 'דניאל פלוק',
        teamId: '4',
    },
    {
        id: '4',
        name: 'נועה יוסופוב',
        teamId: '4',
    },
    {
        id: '5',
        name: 'דוד שמואלסון',
        teamId: '4',
    },
    {
        id: '6',
        name: 'דניאל סבאג',
        teamId: '4',
    },
    {
        id: '7',
        name: 'נטלי גנה',
        teamId: '4',
    },
    {
        id: '8',
        name: 'אור עדני',
        teamId: '4',
    },
    {
        id: '9',
        name: 'דנה הרטמן',
        teamId: '4',
    },
    {
        id: '10',
        name: 'גל רוימי',
        teamId: '4',
    },
    {
        id: '11',
        name: 'ירין לוי',
        teamId: '4',
    },
    {
        id: '12',
        name: 'דן ירון',
        teamId: '5',
    },
    {
        id: '13',
        name: 'טל נתן',
        teamId: '5',
    },
    {
        id: '14',
        name: 'רוני דחבש',
        teamId: '5',
    },
    {
        id: '15',
        name: 'שגיא ספטון',
        teamId: '5',
    },
    {
        id: '16',
        name: 'אלון מלכה',
        teamId: '5',
    },
    {
        id: '17',
        name: 'דורון קדם גולדמן',
        teamId: '5',
    },
    {
        id: '18',
        name: 'יואב ריכטר',
        teamId: '5',
    },
    {
        id: '19',
        name: 'נתנאל בראל',
        teamId: '5',
    },
    {
        id: '20',
        name: 'אסתר קרזניצקי',
        teamId: '5',
    },
    {
        id: '21',
        name: 'חן שי זילברמן',
        teamId: '5',
    },
    {
        id: '22',
        name: 'יובל פורמן אסא',
        teamId: '6',
    },
    {
        id: '23',
        name: 'לידור ערמי',
        teamId: '6',
    },
    {
        id: '24',
        name: 'שחר נהרוז',
        teamId: '6',
    },
    {
        id: '25',
        name: 'מאור אחתרזד',
        teamId: '6',
    },
    {
        id: '26',
        name: 'איתן עובדיה',
        teamId: '6',
    },
    {
        id: '27',
        name: 'איתמר לחויצר',
        teamId: '6',
    },
    {
        id: '28',
        name: 'ליאור צרשנקי',
        teamId: '6',
    },
    {
        id: '29',
        name: 'שחר אלויה',
        teamId: '6',
    },
    {
        id: '30',
        name: 'גל שחם',
        teamId: '6',
    },
    {
        id: '31',
        name: 'ליהי שלי',
        teamId: '6',
    },
    {
        id: '32',
        name: 'ארבל קציר',
        teamId: '1',
    },
    {
        id: '33',
        name: 'דר פיינשטיין',
        teamId: '1',
    },
    {
        id: '34',
        name: 'יהל וייס',
        teamId: '1',
    },
    {
        id: '35',
        name: 'יונתן בן מנחם',
        teamId: '1',
    },
    {
        id: '36',
        name: 'ים זברק',
        teamId: '1',
    },
    {
        id: '37',
        name: 'תומר חקק',
        teamId: '1',
    },
    {
        id: '38',
        name: 'נועה לוי',
        teamId: '1',
    },
    {
        id: '39',
        name: 'רוני גולדשטיין',
        teamId: '1',
    },
    {
        id: '40',
        name: 'תומר דהן',
        teamId: '1',
    },
    {
        id: '41',
        name: 'איתי רוזנבאום',
        teamId: '1',
    },
    {
        id: '42',
        name: 'דור מרקס',
        teamId: '1',
    },
    {
        id: '43',
        name: 'אלן פריד',
        teamId: '2',
    },
    {
        id: '44',
        name: 'גיא נתן אנקונה',
        teamId: '2',
    },
    {
        id: '45',
        name: 'ליאור שוחמייסטר',
        teamId: '2',
    },
    {
        id: '46',
        name: 'רחל שמולאוביץ',
        teamId: '2',
    },
    {
        id: '47',
        name: 'אליאור דבאח',
        teamId: '2',
    },
    {
        id: '48',
        name: 'מעין לזר',
        teamId: '2',
    },
    {
        id: '49',
        name: 'רותם גרבי',
        teamId: '2',
    },
    {
        id: '50',
        name: 'לינוי עטיה',
        teamId: '3',
    },
    {
        id: '51',
        name: 'עידו אפללו',
        teamId: '3',
    },
    {
        id: '52',
        name: 'עידן בן שבת',
        teamId: '3',
    },
    {
        id: '53',
        name: 'רון אברהם',
        teamId: '3',
    },
    {
        id: '54',
        name: 'אלינור חיימוב',
        teamId: '3',
    },
    {
        id: '55',
        name: 'שקד השילוני',
        teamId: '3',
    },
];
let soldiers = soldierWithoutDefaults.map((soldier) => ({
    ...soldier,
    status: 'undefined',
    reason: ''
}));
const changeSoldierStatus = (soldier, newStatus) => {
    const prevStatus = soldier.status;
    soldier.status = newStatus;
    if (newStatus === 'here') {
        soldier.reason = '';
    }
    file_logger_1.logger.info({ ...soldier, prevStatus, action: 'statusChange' });
};
exports.soldierTsFileDal = {
    getAllSoldiers: () => {
        return soldiers;
    },
    getSoldiersByTeam: (id) => {
        const soldiersInTeam = soldiers.filter(soldier => soldier.teamId === id);
        return soldiersInTeam;
    },
    changeSoldierStatusById: (id, newStatus, reason) => {
        soldiers = soldiers.map(soldier => {
            if (soldier.id === id) {
                const newSoldier = soldier;
                newSoldier.reason = reason;
                changeSoldierStatus(newSoldier, newStatus);
                return newSoldier;
            }
            return soldier;
        });
        return true;
    },
    resetAllSoldiers: () => {
        soldiers = soldiers.map(soldier => {
            const newSoldier = soldier;
            changeSoldierStatus(newSoldier, 'undefined');
            return newSoldier;
        });
        file_logger_1.logger.info({ action: 'resetStatusForAllTeams' });
        return true;
    },
    resetAllSoldiersByTeam: (id) => {
        soldiers = soldiers.map(soldier => {
            if (soldier.teamId === id) {
                const newSoldier = soldier;
                changeSoldierStatus(newSoldier, 'undefined');
                return newSoldier;
            }
            return soldier;
        });
        file_logger_1.logger.info({ teamId: id, action: 'resetStatusForTeam' });
        return true;
    }
};

import { Soldier, SoldierStatus } from "./soldier";

export type SoldierDal = {
    getAllSoldiers: () => Soldier[];
    getSoldiersByTeam: (id: string) => Soldier[];
    changeSoldierStatusById: (id: string, newStatus: SoldierStatus, reason: string) => boolean;
    resetAllSoldiers: () => boolean;
    resetAllSoldiersByTeam: (id: string) => boolean;
}
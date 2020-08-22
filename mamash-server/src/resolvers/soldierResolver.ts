import { Resolver, Query, Args, Mutation, Arg } from 'type-graphql';
import { Soldier, SoldierStatus } from '../types/soldier';
import { SoldierDal } from '../types/soldierDal';
import { soldierTsFileDal } from '../ts-file-dal/soldierTsFileDal';

@Resolver(Soldier)
export class SoldierResolver {
    soldierDal: SoldierDal
    constructor() {
        this.soldierDal = soldierTsFileDal;
     }

    @Query(returns => [Soldier])
    soldiers(@Arg("teamId", { nullable: true }) teamId?: string) {
        let soldiers = [];
        if (teamId) {
            soldiers = this.soldierDal.getSoldiersByTeam(teamId);
        }
        else {
            soldiers = this.soldierDal.getAllSoldiers();
        }

        return soldiers;
    }

    @Mutation(returns => Boolean)
    updateSoldierStatus(
        @Arg("id") id: string,
        @Arg("newStatus") newStatus: SoldierStatus,
        @Arg("reason") reason: string
    ){
        return this.soldierDal.changeSoldierStatusById(id, newStatus, reason);
    }

    @Mutation(returns => Boolean)
    async resetAllSoldiersByTeam(@Arg("id") id: string) {
        return this.soldierDal.resetAllSoldiersByTeam(id);
    }

    @Mutation(returns => Boolean)
    async resetAllSoldiers() {
        return this.soldierDal.resetAllSoldiers();
    }
}
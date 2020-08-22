import { Resolver, Query, Arg } from "type-graphql";
import { Team } from '../types/team';
import { TeamDal } from "../types/teamDal";
import { teamTsFileDal } from "../ts-file-dal/teamsTsFileDal";

@Resolver(Team)
export class TeamResolver {
    teamDal: TeamDal
    constructor() {
        this.teamDal = teamTsFileDal;
     }

    @Query(returns => [Team])
    teams(@Arg("plugaId") plugaId: string) {
        return this.teamDal.getTeamsByPluga(plugaId);
    }
}
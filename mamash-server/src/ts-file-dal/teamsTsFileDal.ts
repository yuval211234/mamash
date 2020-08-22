import { TeamDal } from "../types/teamDal";
import { getTeams } from '../soldiers';

export const teamTsFileDal: TeamDal = {
    getTeamsByPluga: (id: string) => {
        return getTeams();
    }
}
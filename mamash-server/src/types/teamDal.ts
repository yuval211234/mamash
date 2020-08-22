import { Team } from "./team";

export type TeamDal = {
    getTeamsByPluga: (id: string) => Team[];
}
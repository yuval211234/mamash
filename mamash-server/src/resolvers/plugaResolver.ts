import { Resolver, Query } from "type-graphql";
import { PlugotDal } from '../types/plugotDal';
import { Pluga } from '../types/pluga';
import { plugaTsFileDal } from "../ts-file-dal/plugotTsFileDal";

@Resolver(Pluga)
export class PlugaResolver {
    plugaDal: PlugotDal
    constructor() {
        this.plugaDal = plugaTsFileDal;
     }

    @Query(returns => [Pluga])
    plugot() {
        return this.plugaDal.getAllPlugot();
    }
}
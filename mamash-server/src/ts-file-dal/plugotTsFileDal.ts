import { PlugotDal } from "../types/plugotDal";
import { getPlugot } from '../soldiers';

export const plugaTsFileDal: PlugotDal = {
    getAllPlugot: () => {
        return getPlugot();
    }
}
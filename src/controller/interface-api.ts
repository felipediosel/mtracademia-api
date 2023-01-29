import { Model } from 'sequelize-typescript'
import { Request } from 'express';

export default interface ControllerInterfaceApi {

    getAll(res: Request | null): Promise<Model[]>;
}
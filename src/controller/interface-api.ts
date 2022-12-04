import { Model } from 'sequelize-typescript'

export default interface ControllerInterfaceApi {

    getAll(): Promise<Model[]>;
}
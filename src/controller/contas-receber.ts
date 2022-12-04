import ModelContasReceber from '../model/contas-receber'
import ControllerInterfaceApi from './interface-api'

export default class ControllerContasReceber implements ControllerInterfaceApi {

    async getAll(): Promise<ModelContasReceber[]> {
        return await ModelContasReceber.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
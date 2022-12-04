import ModelContasReceberPagtos from '../model/contas-receber-pagtos'
import ControllerInterfaceApi from './interface-api'

export default class ControllerContasReceberPagtos implements ControllerInterfaceApi {

    async getAll(): Promise<ModelContasReceberPagtos[]> {
        return await ModelContasReceberPagtos.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
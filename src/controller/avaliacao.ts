import ModelAvaliacao from '../model/avaliacao'
import ControllerInterfaceApi from './interface-api'

export default class ControllerAvaliacao implements ControllerInterfaceApi {

    async getAll(): Promise<ModelAvaliacao[]> {
        return await ModelAvaliacao.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
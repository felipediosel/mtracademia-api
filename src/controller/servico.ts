import ModelServico from '../model/servico'
import ControllerInterfaceApi from './interface-api'

export default class ControllerServico implements ControllerInterfaceApi {

    async getAll(): Promise<ModelServico[]> {
        return await ModelServico.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
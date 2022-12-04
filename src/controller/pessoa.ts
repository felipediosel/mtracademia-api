import ModelPessoa from '../model/pessoa'
import ControllerInterfaceApi from './interface-api'

export default class ControllerPessoa implements ControllerInterfaceApi {

    async getAll(): Promise<ModelPessoa[]> {
        return await ModelPessoa.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
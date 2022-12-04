import ModelEventoAcesso from '../model/evento-acesso'
import ControllerInterfaceApi from './interface-api'

export default class ControllerEventoAcesso implements ControllerInterfaceApi {

    async getAll(): Promise<ModelEventoAcesso[]> {
        return await ModelEventoAcesso.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
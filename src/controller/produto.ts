import ModelProduto from '../model/produto'
import ControllerInterfaceApi from './interface-api'

export default class ControllerProduto implements ControllerInterfaceApi {

    async getAll(): Promise<ModelProduto[]> {
        return await ModelProduto.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
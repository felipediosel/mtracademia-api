import ModelAvaliacaoResposta from '../model/avaliacao-resposta'
import ControllerInterfaceApi from './interface-api'

export default class ControllerAvaliacaoResposta implements ControllerInterfaceApi {

    async getAll(): Promise<ModelAvaliacaoResposta[]> {
        return await ModelAvaliacaoResposta.findAll({
            order: [
                ['avaliacao_id', 'asc'],
                ['questao_id', 'asc'],
            ]
        })
    }
}
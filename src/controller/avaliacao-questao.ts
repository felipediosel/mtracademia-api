import ModelAvaliacaoQuestao from '../model/avaliacao-questao'
import ControllerInterfaceApi from './interface-api'

export default class ControllerAvaliacaoQuestao implements ControllerInterfaceApi {

    async getAll(): Promise<ModelAvaliacaoQuestao[]> {
        return await ModelAvaliacaoQuestao.findAll({
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
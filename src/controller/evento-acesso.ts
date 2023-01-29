import Controller from '../controller/controller'
import ControllerInterfaceApi from './interface-api'
import ModelEventoAcesso from '../model/evento-acesso'
import { Request } from 'express';
import { Op } from "sequelize";

export default class ControllerEventoAcesso extends Controller implements ControllerInterfaceApi {

    async getAll(req: Request): Promise<ModelEventoAcesso[]> {
        let { start, end } = this.getStartEndDate(req, 7);

        return await ModelEventoAcesso.findAll({
            where: {
                'data': {
                    [Op.gte]: start,
                    [Op.lte]: end
                }
            },
            order: [
                ['id', 'asc'],
            ]
        })
    }
}
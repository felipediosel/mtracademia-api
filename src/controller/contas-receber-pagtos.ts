import Controller from './controller';
import ControllerInterfaceApi from './interface-api'
import ModelContasReceberPagtos from '../model/contas-receber-pagtos'
import { Request } from 'express';
import { Op } from "sequelize";

export default class ControllerContasReceberPagtos extends Controller implements ControllerInterfaceApi {

    async getAll(req: Request): Promise<ModelContasReceberPagtos[]> {
        let { start, end } = this.getStartEndDate(req);

        return await ModelContasReceberPagtos.findAll({
            where: {
                'pagto_data': {
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
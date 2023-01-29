import Controller from './controller';
import ControllerInterfaceApi from './interface-api'
import ModelContasReceber from '../model/contas-receber'
import { Request } from 'express';
import { Op } from "sequelize";

export default class ControllerContasReceber extends Controller implements ControllerInterfaceApi {

    async getAll(req: Request): Promise<ModelContasReceber[]> {
        let { start, end } = this.getStartEndDate(req);

        return await ModelContasReceber.findAll({
            where: {
                'vencimento': {
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
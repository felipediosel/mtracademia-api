import { Request } from 'express';

type Data = {
    start: Date,
    end: Date
}

export default class Controller {

    getStartEndDate(req: Request, lastDays: number = 365): Data {
        let start: string | undefined;
        let end: string | undefined;

        start = req.query.start?.toString();
        end = req.query.end?.toString();

        let currentDate = new Date();

        let defaultStartDate = new Date();
        defaultStartDate.setDate(currentDate.getDate() - lastDays);

        let defaultEndDate = currentDate;

        let StartDate = start ? new Date(start) : defaultStartDate;
        let EndDate = end ? new Date(end) : defaultEndDate;

        return {
            'start': !isNaN(StartDate.getTime()) ? StartDate : defaultStartDate,
            'end': !isNaN(EndDate.getTime()) ? EndDate : defaultEndDate
        }
    }
}
import { NextFunction, Request, Response } from "express";

export default class BaseController {
    
    async handleAsyncServiceResponse(req: Request, res: Response, next: NextFunction, method: () => Promise<any>) {
        method()
        .then((data) => {
            return res.json(data);
        }).catch((err) => {
            return next(err);
        })
    }
}
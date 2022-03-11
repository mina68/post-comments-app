import { NextFunction, Request, Response } from "express";

export default class BaseController {
    
    async handleAsyncServiceResponse(req: Request, res: Response, next: NextFunction, method: Function) {
        method()
        .then((data: any) => {
            return res.json(data);
        }).catch((err: Error) => {
            return next(err);
        })
    }
}
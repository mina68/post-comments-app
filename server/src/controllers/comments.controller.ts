import { NextFunction, Request, Response } from "express";
import { Inject, Service } from "typedi";
import CommentService from "../services/comment.service";
import BaseController from "./BaseController";

@Service()
export default class CommentController extends BaseController {

    constructor(@Inject('service.comment') private CommentService: CommentService) { 
        super() 
    }

    public getOne(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.CommentService.fineOne(parseInt(req.params.id)));
    }
    
    public create(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.CommentService.create(req.body));
    }
    
    public delete(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.CommentService.delete(parseInt(req.params.id)));
    }
}
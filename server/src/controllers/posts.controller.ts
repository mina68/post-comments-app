import { NextFunction, Request, Response } from "express";
import { Inject, Service } from "typedi";
import PostService from "../services/post.service";
import BaseController from "./BaseController";

@Service()
export default class PostController extends BaseController{

    constructor(@Inject('service.post') private postService: PostService){
        super();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.postService.getAll());
    }
    
    public getOne(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.postService.fineOne(parseInt(req.params.id)));
    }
    
    public getComments(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.postService.getPostComments(parseInt(req.params.id)));
    }
    
    public create(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.postService.create(req.body));
    }
    
    public delete(req: Request, res: Response, next: NextFunction) {
        return this.handleAsyncServiceResponse(req, res, next, () => this.postService.delete(parseInt(req.params.id)));
    }
}
import express from 'express';
import { checkSchema, param } from 'express-validator';
import Container from 'typedi';
import PostController from '../controllers/posts.controller';
import checkValidationErrors from '../middlewares/checkValidationErrors';
import createPost from '../validationSchemas/createPost';

const router = express.Router();

export default function postRoutes( app: express.Router ) {

    const postController = Container.get(PostController);

    app.use('/posts', router);

    router.get(
        '/', 
        (req, res, next) => postController.getAll(req, res, next)
    );

    router.post(
        '/', 
        checkSchema(createPost),
        checkValidationErrors,
        (req: express.Request, res: express.Response, next: express.NextFunction) => postController.create(req, res, next)
    );

    router.get(
        '/:id', 
        param('id').isInt(),
        checkValidationErrors,
        (req: express.Request, res: express.Response, next: express.NextFunction) => postController.getOne(req, res, next)
    );

    router.delete(
        '/:id', 
        param('id').isInt(),
        checkValidationErrors,
        (req: express.Request, res: express.Response, next: express.NextFunction) => postController.delete(req, res, next)
    );

    router.get(
        '/:id/comments',
        param('id').isInt(),
        checkValidationErrors,
        (req: express.Request, res: express.Response, next: express.NextFunction) => postController.getComments(req, res, next)
    );
}
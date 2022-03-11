import express from 'express';
import { checkSchema, param } from 'express-validator';
import Container from 'typedi';
import CommentController from '../controllers/comments.controller';
import checkValidationErrors from '../middlewares/checkValidationErrors';
import createComment from '../validationSchemas/createComment';

const router = express.Router();

export default function commentRoutes( app: express.Router ) {

    const commentController = Container.get(CommentController);

    app.use('/comments', router);

    router.post(
        '/', 
        checkSchema(createComment),
        checkValidationErrors,
        (req: express.Request, res: express.Response, next: express.NextFunction) => commentController.create(req, res, next)
    );

    router.get(
        '/:id', 
        param('id').isInt(),
        checkValidationErrors,
        (req: express.Request, res: express.Response, next: express.NextFunction) => commentController.getOne(req, res, next)
    );

    router.delete(
        '/:id', 
        param('id').isInt(),
        checkValidationErrors,
        (req: express.Request, res: express.Response, next: express.NextFunction) => commentController.delete(req, res, next)
    );
}
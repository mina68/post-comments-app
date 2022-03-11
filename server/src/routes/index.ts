import express from 'express';
import commentRoutes from './comment.route';
import postRoutes from './post.route';

export default () => {
    const app = express.Router();

    // modules routes
    postRoutes(app);
    commentRoutes(app);

    return app;
}
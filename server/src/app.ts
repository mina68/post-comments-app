import "reflect-metadata";
import express from 'express';
import startup from './startup';

async function startServer() {
    const app = express();

    await startup(app);

    app.listen('3001', () => {
        console.log('Server is listening to requests on http://localhost:3001');
    })
}

startServer();
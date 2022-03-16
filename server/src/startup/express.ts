import express, { NextFunction, Request, Response } from "express";
import appRoutes from "../routes";
import cors from 'cors';

export default (app: express.Application) => {

  app.use(cors());

  app.use(express.json());

  app.use(appRoutes());

  //handle unregistered requests
  app.use((req, res, next) => {
    res.status(404);
    res.json({
      errors: {
        message: "Not Found!",
      },
    });
  });

  app.use((err: {status: number, message: string}, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};

import express from 'express';
import Container from 'typedi';
import connect from './dbConnection';
import dependencyInjectorRegistrer from './dependencyInjector';
import expressRegisterer from './express';


export default async (app: express.Application) => {

    // connect to database
    const connection = await connect();
    Container.set('connection', connection);
    console.log('db Connected.');


    // register dependency injector
    dependencyInjectorRegistrer();
    
    // register express routes & middlewares
    expressRegisterer(app);
    console.log('express loaded.');
}
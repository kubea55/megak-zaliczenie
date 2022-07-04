import {Router} from "express";

export const mainRouter = Router();

mainRouter
    .get('/', (rew, res) => {
        res.redirect('/task')
    });
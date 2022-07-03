import {Router} from "express";

export const mainRouter = Router();

mainRouter
    .get('/', (req, res) => {
        res.render('tasks/all-tasks')
    })
    .get('/add-task', (req, res) => {
        res.render('tasks/add-task')
    })
    .get('/:id', (req, res) => {
        res.render('tasks/one-task')
    })
    .get('/edit/:id', (req, res) => {
        res.render('tasks/edit-task')
    })
    .post('/add-task', (req, res) => {
        res.render('tasks/added')
    })
    .post('/edit', (req, res) => {
        res.render('tasks/updated')
    })
    .delete('/:id', (req, res) => {
        res.render('tasks/deleted')
    })
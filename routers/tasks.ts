import {Router} from "express";
import {TaskRecord} from "../records/task";

const priority = ["Low", "Medium", "High"];
const status = ["Todo", "In progress", "Completed"];

export const taskRouter = Router();

taskRouter
    .get('/', async (req, res) => {
        const tasks = (await TaskRecord.getAll()).map((task, index) => {
            return {
                numeral: index + 1,
                task,
            }
        });
        res.render('tasks/all-tasks', {
            tasks
        });
    })

    .get('/add-form', (req, res) => {
        res.render('tasks/add-task', {
            priority
        });
    })

    .get('/edit/:id', async (req, res) => {
        const id = req.params.id;
        const task = await TaskRecord.getOne(id);
        res.render('tasks/edit-task', {
            task,
            priority,
            status
        });
    })

    .post('/add', async (req, res) => {
        const newTask = await new TaskRecord(req.body);
        const newId = await newTask.insert();
        res.render('tasks/added', {
            newId
        });
    })

    .put('/update/:id', async (req, res) => {
        const taskId = req.params.id;
        const obj = req.body;
        const updatedTask = new TaskRecord({...obj, id: taskId});
        const id = await updatedTask.update();
        res.render('tasks/updated', {
            id
        });
    })

    .delete('/:id', async (req, res) => {
        const id = req.params.id;
        const task = await TaskRecord.getOne(id);
        const deletedId = await task.delete();
        res.render('tasks/deleted', {
            deletedId
        });
    });
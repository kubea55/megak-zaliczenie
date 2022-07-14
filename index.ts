import * as express from 'express';
import {static as eStatic, urlencoded} from 'express';
import 'express-async-errors';
import * as methodOverride from 'method-override';
import {engine} from 'express-handlebars';
import {handleError} from "./utils/error";
import {taskRouter} from './routers/tasks';
import {mainRouter} from './routers/main';

const app = express();

app.use(methodOverride('_method'));
app.use(eStatic('public'));
app.use(urlencoded({
    extended: true,
}));
app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.use(handleError);
app.use('/', (mainRouter))
app.use('/task', (taskRouter))

app.listen(3000, 'localhost', () => {
    console.log('Listening on: http://localhost:3000')
});

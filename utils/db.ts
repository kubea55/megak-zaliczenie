import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak-todo-list',
    decimalNumbers: true,
    namedPlaceholders: true
});

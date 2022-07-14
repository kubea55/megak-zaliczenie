import {v4 as uuid} from "uuid";
import {ValidationError} from "../utils/error";
import {pool} from "../utils/db";
import {TaskRecordResults} from "../types";

export class TaskRecord {
    public id?: string;
    public task: string;
    public status?: string;
    public priority: string;

    constructor(obj: Omit<TaskRecord, 'insert' | 'update' | 'delete'>) {
        const {id, task, status, priority} = obj;

        if (task.length < 3 || !task || task.length > 300) {
            throw new ValidationError('Task should be at least 3 and at most 300 characters.');
        }
        if (!["Low", "Medium", "High"].includes(priority)) {
            throw new ValidationError('Task has invalid priority');
        }
        if (!["Todo", "In progress", "Completed"].includes(status)) {
            throw new ValidationError('Task has invalid status');
        }

        this.id = id;
        this.task = task;
        this.status = status ?? "Todo";
        this.priority = priority;
    };

    static async getAll(): Promise<TaskRecord[]> | null {
        const [results] = await pool.execute('SELECT * FROM `tasks`') as TaskRecordResults;
        return results.length === 0 ? null : results.map(obj => new TaskRecord(obj));
    };

    static async getOne(id: string): Promise<TaskRecord> | null {
        const [results] = await pool.execute('SELECT * FROM `tasks` WHERE `id` = :id', {
            id
        }) as TaskRecordResults;
        return results.length === 0 ? null : new TaskRecord(results[0]);
    };

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute('INSERT INTO `tasks` (`id`, `task`,`status`, `priority`) VALUES (:id,:task,:status,:priority)', {
            id: this.id,
            task: this.task,
            status: this.status,
            priority: this.priority,
        });
        return this.id;
    };

    async update(): Promise<string> {
        await pool.execute('UPDATE `tasks` SET `task`= :task,`status`= :status, `priority`= :priority WHERE `id` = :id', {
            id: this.id,
            task: this.task,
            status: this.status,
            priority: this.priority,
        });
        return this.id;
    };

    async delete(): Promise<string> {
        await pool.execute('DELETE FROM `tasks` WHERE `id` = :id', {
            id: this.id
        });
        return this.id;
    };

}
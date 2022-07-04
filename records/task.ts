import {v4 as uuid} from "uuid";
import {ValidationError} from "../utils/error";
import {pool} from "../utils/db";
import {Task, TaskRecordResults} from "../types";

export class TaskRecord {
    id?: string;
    task: string;

    constructor(obj: Task) {
        const {task} = obj;

        if (task.length < 3 || !task || task.length > 250) {
            throw new ValidationError('Task should be at least 3 and at most 250 characters.')
        }
    };

    static async getAll(): Promise<TaskRecord[]> | null {
        const [results] = await pool.execute('SELECT * FROM `tasks`') as TaskRecordResults;
        return results.length === 0 ? null : results.map(obj => new TaskRecord(obj));

    };

    async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid()
        }
        await pool.execute('INSERT INTO `tasks` (`id`, `task`) VALUES (:id,:task)', {
            id: this.id,
            task: this.task
        });
        return this.id;
    };

    async update(): Promise<string> {
        await pool.execute('UPDATE `tasks` SET `task`= :task WHERE `id` = :id', {
            id: this.id,
            task: this.task
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
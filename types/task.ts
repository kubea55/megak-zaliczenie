import {FieldPacket} from "mysql2";
import {TaskRecord} from "../records/task";

export interface Task {
    id?: string;
    task: string
}

export type TaskRecordResults = [TaskRecord[], FieldPacket[]];

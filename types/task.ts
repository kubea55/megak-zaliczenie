import {FieldPacket} from "mysql2";
import {TaskRecord} from "../records/task";

export type TaskRecordResults = [TaskRecord[], FieldPacket[]];

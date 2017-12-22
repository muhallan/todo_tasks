import { Task } from './../../task';
import { TaskState } from './../reducers/tasks.reducer';

export interface AppState {
    task: TaskState;
}

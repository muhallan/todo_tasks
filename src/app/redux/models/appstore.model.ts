import { Task } from './../../task';
import { TaskState } from './../reducers/tasks.reducer';

export interface AppState {
    task: TaskState;
}

// selector
// export const getCurrentTasks = (state: AppState) => state.task;

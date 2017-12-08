import { Task } from './../../task';

export interface AppState {
    tasks: Task[];
}

// selector
export const getCurrentTasks = (state: AppState) => state.tasks;

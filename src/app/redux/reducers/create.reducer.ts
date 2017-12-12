import * as create_task from './../actions/create_task.action';
import { Task } from './../../task';

// The "create_task_reducer" reducer creates a task and adds it to the list of tasks
export function create_task_reducer (state: Task[] = [], action: create_task.CreateTaskAction) {
    switch (action.type) {
        case create_task.CREATE_TASK:
          return [...state, action.payload];
        default:
          return state;
      }
}

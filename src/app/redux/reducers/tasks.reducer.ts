import * as all_tasks from './../actions/get_tasks.action';
import { ActionReducer, Action } from '@ngrx/store';
import { Task } from './../../task';

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = { tasks: [] };

// The "get_tasks_reducer" reducer performs actions on our list of tasks
export function get_tasks_reducer (state: TaskState = initialState, action: Action): TaskState {
    switch (action.type) {
        case 'GET_TASKS':
          console.log('GETTING_TASKS', state);
          return {...state, tasks: [...state.tasks, (<any>action).payload]};
        default:
          return state;
    }
}

// export const getTaskReducer: ActionReducer<Object> = get_tasks_reducer;

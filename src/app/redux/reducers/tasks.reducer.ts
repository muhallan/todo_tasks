
import { ActionReducer, Action } from '@ngrx/store';
import { Task } from './../../task';
export interface TaskState {
  tasks: Task[];
}

export const CREATE_TASK = 'CREATE_TASK';
export class CreateTaskAction implements Action {
    type = CREATE_TASK;

    constructor(public payload: Task) {}
}

export const DELETE_TASK = 'DELETE_TASK';
export class DeleteTasksAction implements Action {
    type = DELETE_TASK;

    constructor(public payload: number) {}
}

export const GET_TASKS = 'GET_TASKS';
export class GetTasksAction implements Action {
    type = GET_TASKS;

    constructor(public payload: Task[] = []) {}
}

export const UPDATE_TASK = 'UPDATE_TASK';
export class UpdateTaskAction implements Action {
    type = UPDATE_TASK;

    constructor(public payload: Task) {}
}

const initialState: TaskState = { tasks: [] };

export function tasks_reducer (state: TaskState = initialState, action: Action): TaskState {
    switch (action.type) {
        case GET_TASKS:
          return {...state, tasks: (<GetTasksAction>action).payload};
        case CREATE_TASK:
          return {...state, tasks: [...state.tasks, (<CreateTaskAction>action).payload]};
        case DELETE_TASK:
          return {
            ...state, tasks: state.tasks.filter(
              task => task.id !== (<DeleteTasksAction>action).payload)
          };
        case UPDATE_TASK:
          return {
            ...state, tasks: state.tasks.map(
              task => task.id === (<UpdateTaskAction>action).payload.id ?
              Object.assign({}, task, (<any>action).payload) : task)
            };
        default:
          return state;
    }
}



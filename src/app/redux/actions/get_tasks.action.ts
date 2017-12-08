import { Action } from '@ngrx/store';
import { Task } from './../../task';

export const GET_TASKS = 'GET TASKS';

export class GetTasksAction implements Action {
    type = GET_TASKS;

    constructor(public payload: Array<Task>) {}
}

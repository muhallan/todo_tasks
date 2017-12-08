import { Action } from '@ngrx/store';
import { Task } from './../../task';

export const UPDATE_TASK = 'UPDATE TASK';

export class UpdateTaskAction implements Action {
    type = UPDATE_TASK;

    constructor(public payload: Task) {}
}

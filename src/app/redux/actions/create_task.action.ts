import { Action } from '@ngrx/store';
import { Task } from './../../task';

export const CREATE_TASK = 'CREATE TASK';

export class CreateTaskAction implements Action {
    type = CREATE_TASK;

    constructor(public payload: Task) {}
}

import { Action } from '@ngrx/store';

export const DELETE_TASK = 'DELETE TASK';

export class DeleteTasksAction implements Action {
    type = DELETE_TASK;

    constructor(public payload: number) {}
}

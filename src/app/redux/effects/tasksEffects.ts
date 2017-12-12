import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import * as get_tasks from './../actions/get_tasks.action';
import { ApiService } from './../../services/api.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { GetTasksAction } from './../actions/get_tasks.action';

@Injectable()
export class TasksEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(get_tasks.GET_TASKS)
        .switchMap(() =>
            this.apiService
                .getAllTasks()
                .map(data => new GetTasksAction(data))
        );

    constructor(
        private apiService: ApiService,
        private actions$: Actions
    ) {}
}

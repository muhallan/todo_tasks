import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../redux/models/appstore.model';
import { Task } from './../task';
import { Store } from '@ngrx/store';
import { environment } from './../../environments/environment';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { tasks_reducer, CreateTaskAction, DeleteTasksAction, GetTasksAction, UpdateTaskAction } from './../redux/reducers/tasks.reducer';

import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TasksService {

  tasks: Task[];

  constructor(private http: Http, private store: Store<AppState>) {
  }

  // API: GET /todos
  public getAllTasks() {
    this.http.get(API_URL + '/todos')
      .map(res => res.json())
      .subscribe(payload => this.store.dispatch(new GetTasksAction(payload)));
  }

  // API: POST /todos
  public createTask(task: Task) {
    this.http.post(API_URL + '/todos', JSON.stringify(task), HEADER)
    .map(res => (new CreateTaskAction(res.json())))
    .subscribe(action => this.store.dispatch(action));
  }

  // API: GET /todos/:id
  /*public getTaskById(taskId: number) {
    return this.http
    .get(API_URL + '/todos/' + taskId)
    .map(response => {
      return new Task(response.json());
    })
    .catch(this.handleError);
  }*/

  // API: PUT /todos/:id
  public updateTask(task: Task) {
    this.http.put(API_URL + '/todos/' + task.id, JSON.stringify(task), HEADER)
    .subscribe(res => this.store.dispatch(new UpdateTaskAction(task)));
  }

  // DELETE /todos/:id
  public deleteTaskById(taskId: number) {
    this.http.delete(API_URL + '/todos/' + taskId)
    .subscribe(action => this.store.dispatch(new DeleteTasksAction(taskId)));
  }

  // error handler method
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  // create headers to use with the Http module while sending a post
  private jsonHeaders() {
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const reqOptions = new RequestOptions({headers: headers});

    return reqOptions;
}
}

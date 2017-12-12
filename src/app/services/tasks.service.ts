import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../redux/models/appstore.model';
import { Task } from './../task';
import { Store } from '@ngrx/store';
import { environment } from './../../environments/environment';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CreateTaskAction } from './../redux/actions/create_task.action';
import { DeleteTasksAction } from './../redux/actions/delete_task.action';
import { GetTasksAction } from './../redux/actions/get_tasks.action';
import { UpdateTaskAction } from './../redux/actions/update_task.action';
import { get_tasks_reducer } from './../redux/reducers/tasks.reducer';

import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TasksService {

  tasks: Task[];

  constructor(private http: Http, private store: Store<AppState>) {
    setTimeout(() => {
      console.log('timeout');
      this.store.dispatch({type: 'GET_TASKS', payload: {id: 2}});
    }, 3000
  );

  }

  // API: GET /todos
  public getAllTasks() {
    this.http.get(API_URL + '/todos')
      .map(res => res.json())
      .map(payload => (new GetTasksAction(payload)))
      .subscribe(action => this.store.dispatch(action));
  }

  // API: POST /todos
  public createTask(task: Task) {
    this.http.post(API_URL + '/todos', JSON.stringify(task), HEADER)
    .map(res => res.json())
    .map(payload => (new CreateTaskAction(payload)))
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
    .subscribe(action => this.store.dispatch(new UpdateTaskAction(task)));
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
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.access_token) {
        headers.set('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // append the user's access token as an authorization header
        headers.set('Authorization', 'Bearer ' + currentUser.access_token);
    }
    const reqOptions = new RequestOptions({headers: headers});

    return reqOptions;
}
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../models/appstore.model';
import { Task } from './../../task';
import { Store } from '@ngrx/store';
import { environment } from './../../../environments/environment';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { CreateTaskAction } from './../actions/create_task.action';
import { DeleteTasksAction } from './../actions/delete_task.action';
import { GetTasksAction } from './../actions/get_tasks.action';
import { UpdateTaskAction } from './../actions/update_task.action';

const API_URL = environment.apiUrl;
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TasksService {

  tasks: Observable<Array<Task>>;

  constructor(private http: Http, private store: Store<AppState>) {
    this.tasks = store.select(state => state.tasks); // Bind an observable of our tasks to "TasksService"
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

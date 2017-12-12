import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Task } from './../task';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  // API: GET /todos
  public getAllTasks() {
    return this.http
    .get(API_URL + '/todos')
    .map(response => {
      const tasks = response.json();
      return tasks.map((task) => new Task(task));
    })
    .catch(this.handleError);
  }

  // API: POST /todos
  public createTask(task: Task) {
    return this.http
    .post(API_URL + '/todos', task)
    .map(response => {
      return new Task(response.json());
    })
    .catch(this.handleError);
  }

  // API: GET /todos/:id
  public getTaskById(taskId: number) {
    return this.http
    .get(API_URL + '/todos/' + taskId)
    .map(response => {
      return new Task(response.json());
    })
    .catch(this.handleError);
  }

  // API: PUT /todos/:id
  public updateTask(task: Task) {
    return this.http
    .put(API_URL + '/todos/' + task.id, task)
    .map(response => {
      return new Task(response.json());
    })
    .catch(this.handleError);
  }

  // DELETE /todos/:id
  public deleteTaskById(taskId: number) {
    return this.http
    .delete(API_URL + '/todos/' + taskId)
    .map(response => null)
    .catch(this.handleError);
  }

  // error handler method
  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}

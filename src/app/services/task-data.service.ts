import { Injectable } from '@angular/core';
import { Task } from './../task';

import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskDataService {

  // create a variable used to create auto incrementing ids for tasks
  last_task_id = 0;

  // array used to store the tasks that are being added to the app.
  all_tasks: Task[] = [];

  constructor(private api: ApiService) { }

  // method to save a new task
  addNewTask (task: Task): Observable<Task> {
    task.id = ++this.last_task_id;

    // add the new task to the list of already available tasks
    return this.api.createTask(task);
  }

  // delete the task from the list of tasks
  deleteTaskWithId (id: number) {
    // remove the task with given id from the list of tasks
    return this.api.deleteTaskById(id);
  }

  getTaskWithId (id: number): Observable<Task> {
    // search for the task in in the list of tasks with a given id and return it
    return this.api.getTaskById(id);
  }

  // edit a task given its id with the new values passed
  editTaskWithId (task: Task, values: Object = {}): Observable<Task> {
    return this.api.updateTask(task);
  }

  // fetch all tasks currently saved
  getAllTasks (): Observable<Task[]> {
    return this.api.getAllTasks();
  }

  // modify the done status of a task
  modifyTaskDoneStatus (task: Task): Observable<Task> {
    task.done_status = !task.done_status;
    return this.api.updateTask(task);
  }

}

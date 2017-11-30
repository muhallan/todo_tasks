import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskDataService {

  // create a variable used to create auto incrementing ids for tasks
  last_task_id = 0;

  // array used to store the tasks that are being added to the app.
  all_tasks: Task[] = [];

  constructor() { }

  // method to save a new task
  addNewTask (task: Task) {
    task.id = ++this.last_task_id;

    // add the new task to the list of already available tasks
    this.all_tasks.push(task);
  }

  // delete the task from the list of tasks
  deleteTaskWithId (id: number) {
    // remove the task with given id from the list of tasks
    this.all_tasks = this.all_tasks.filter(task => task.id !== id);
  }

  getTaskWithId (id: number): Task {
    // search for the task in in the list of tasks with a given id and return it
    return this.all_tasks.filter(task => task.id === id).pop();
  }

  // edit a task given its id with the new values passed
  editTaskWithId (id: number, values: Object = {}): Task {
    // get the task with this id
    const task = this.getTaskWithId(id);
    if (!task) {
      return null;
    }
    // copy the properties passed into the task got
    Object.assign(task, values);
    return task;
  }

  // fetch all tasks currently saved
  getAllTasks (): Task[] {
    return this.all_tasks;
  }

  // modify the done status of a task
  modifyTaskDoneStatus (task: Task): Task {
    const taskToModify = this.editTaskWithId(task.id, {
      done_status: !task.done_status
    });

    return taskToModify;
  }

}

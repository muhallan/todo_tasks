import { Component } from '@angular/core';
// Import class so we can register it as dependency injection token
import { TaskDataService } from './task-data.service';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskDataService]
})
export class AppComponent {

  // the title of the app
  title = 'Tasks Todo App';

  // variable to store in a new task that might be added
  // initialized with the current date and the done_status as false
  newTask: Task = new Task({
    description: 'my description',
    date_created: new Date(),
    date_updated: new Date(),
    done_status: false
  });

  // number of tasks that haven't yet been done
  undone_tasks_num = 0;

  constructor(private taskDataService: TaskDataService) {}

  // method called to add a new task, i.e. when enter is pressed in the input text
  createTask() {
    // call the service method for adding a task
    this.taskDataService.addNewTask(this.newTask);

    // increment the number of undone tasks
    this.undone_tasks_num++;

    // clear the newTask variable and get it ready for adding a new task
    this.newTask = new Task();
  }

  // method to delete the task
  deleteTask(task) {
    // call the service method to delete the task
    this.taskDataService.deleteTaskWithId(task.id);
    // if the deleted task is undone, reduce the number of undone tasks
    if (task.done_status === false || task.done_status === undefined) {
      this.undone_tasks_num--;
    }
  }

  // method to modify the done status of a task
  modifyDoneStatus(task) {
    // call the service method to toggle the done status of a task
    this.taskDataService.modifyTaskDonetatus(task);

    // if the modified task is changed to the done status, then reduce the undone tasks, else increase
    if (task.done_status === true) {
      this.undone_tasks_num--;
    } else {
      this.undone_tasks_num++;
    }
  }

  // create a getter for the list of all tasks
  get tasks() {
    // call the service method for retrieving all tasks
    return this.taskDataService.getAllTasks();
  }

}

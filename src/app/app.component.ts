import { Component, OnInit } from '@angular/core';
// Import class so we can register it as dependency injection token
import { TaskDataService } from './task-data.service';
import { Task } from './task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // number of tasks that haven't yet been done
  undone_tasks_num = 0;

  tasks: Task[] = [];

  constructor(private taskDataService: TaskDataService) {}

  public ngOnInit() {

    // get the list of all tasks
    this.taskDataService
      .getAllTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
        }
      );
  }

  // Add method to handle event emitted by TaskListHeaderComponent
  onAddTodo(task: Task) {
    // call the service method for adding a task
    this.taskDataService
    .addNewTask(task)
    .subscribe(
      (newTask) => {
        this.tasks = this.tasks.concat(newTask);
      }
    );

    // increment the number of undone tasks
    this.undone_tasks_num++;
  }

  // method to delete the task
  onDeleteTask(task) {
    // call the service method to delete the task
    this.taskDataService
    .deleteTaskWithId(task.id)
    .subscribe(
      (_) => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      }
    );

    // if the deleted task is undone, reduce the number of undone tasks
    if (task.done_status === false || task.done_status === undefined) {
      this.undone_tasks_num--;
    }
  }

  // method to modify the done status of a task
  onModifyDoneStatus(task) {
    // call the service method to toggle the done status of a task
    this.taskDataService
    .modifyTaskDoneStatus(task)
    .subscribe(
      (updatedTask) => {
        task = updatedTask;
      }
    );

    // if the modified task is changed to the done status, then reduce the undone tasks, else increase
    if (task.done_status === true) {
      this.undone_tasks_num--;
    } else {
      this.undone_tasks_num++;
    }
  }

}

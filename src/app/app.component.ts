import { Component, OnInit } from '@angular/core';
// Import class so we can register it as dependency injection token
// import { TaskDataService } from './services/task-data.service';
import { Task } from './task';
import { Store } from '@ngrx/store';
import { AppState } from './redux/models/appstore.model';
import { CreateTaskAction, CREATE_TASK } from './redux/actions/create_task.action';
import { GetTasksAction, GET_TASKS } from './redux/actions/get_tasks.action';
import { TasksService } from './services/tasks.service';
import { Observable } from 'rxjs/Observable';
import { TaskState } from './redux/reducers/tasks.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // number of tasks that haven't yet been done
  undone_tasks_num = 0;

  // tasks: Task[];
  taskState: Observable<TaskState>;

  constructor(private tasks_service: TasksService, private store: Store<AppState>) {

    this.taskState = store.select('task');
    this.taskState.subscribe(data => {
      // this.tasks = data;
      console.log(data);
    }); // Bind an observable of our tasks to "TasksService"
    this.store.dispatch({type: 'GET_TASKS', payload: {id: 3}});
    // this.tasks = this.tasks_service.tasks; // Bind to the "items" observable on the "ItemsService"
    // console.log(this.tasks);

    // get the list of all tasks
    this.tasks_service.getAllTasks();
  }

  // Dispatch the Action
  public ngOnInit() {
    // this.store.dispatch(new GetTasksAction(new Array<Task>()));
  }

  // Add method to handle event emitted by TaskListHeaderComponent
  onAddTodo(task: Task) {
    // call the service method for adding a task
    this.tasks_service.createTask(task);

    // increment the number of undone tasks
    this.undone_tasks_num++;
  }

  // method to delete the task
  onDeleteTask(task) {
    // call the service method to delete the task
    this.tasks_service.deleteTaskById(task.id);

    // if the deleted task is undone, reduce the number of undone tasks
    if (task.done_status === false || task.done_status === undefined) {
      this.undone_tasks_num--;
    }
  }

  // method to modify the done status of a task
  onModifyDoneStatus(task) {
    task.done_status = !task.done_status;
    // call the service method to toggle the done status of a task
    this.tasks_service.updateTask(task);

    // if the modified task is changed to the done status, then reduce the undone tasks, else increase
    if (task.done_status === true) {
      this.undone_tasks_num--;
    } else {
      this.undone_tasks_num++;
    }
  }

}

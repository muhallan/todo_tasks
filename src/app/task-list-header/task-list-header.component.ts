import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent implements OnInit {

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

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  // method called to add a new task, i.e. when enter is pressed in the input text
  addTask() {
    this.add.emit(this.newTask);

    // clear the newTask variable and get it ready for adding a new task
    this.newTask = new Task();
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  delete: EventEmitter<Task> = new EventEmitter();

  @Output()
  modifyDoneStatus: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  modifyTaskDoneStatus(task: Task) {
    this.modifyDoneStatus.emit(task);
  }

  deleteTask(task: Task) {
    this.delete.emit(task);
  }

}

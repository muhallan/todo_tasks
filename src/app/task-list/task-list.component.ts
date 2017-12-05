import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  tasks: Task[];

  @Output()
  delete: EventEmitter<Task> = new EventEmitter();

  @Output()
  modifyDoneStatus: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onModifyDoneStatus(task: Task) {
    this.modifyDoneStatus.emit(task);
  }

  onDeleteTask(task: Task) {
    this.delete.emit(task);
  }


}

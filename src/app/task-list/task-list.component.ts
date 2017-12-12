import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { Store } from '@ngrx/store';
import { AppState } from './../redux/models/appstore.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // todo_state: Observable<Task[]>;

  @Input()
  tasks: Task[];

  @Output()
  delete: EventEmitter<Task> = new EventEmitter();

  @Output()
  modifyDoneStatus: EventEmitter<Task> = new EventEmitter();

  // constructor(private store: Store<AppState>) {
  //   this.todo_state = this.store.select(state => state.tasks);
  //   this.todo_state.subscribe(tasks => console.log(tasks));
  // }

  ngOnInit() {
  }

  onModifyDoneStatus(task: Task) {
    this.modifyDoneStatus.emit(task);
  }

  onDeleteTask(task: Task) {
    this.delete.emit(task);
  }


}

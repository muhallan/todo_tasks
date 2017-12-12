import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskDataService } from './services/task-data.service';
import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskListFooterComponent } from './task-list-footer/task-list-footer.component';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';
import { TasksService } from './services/tasks.service';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './redux/effects/tasksEffects';
import { get_tasks_reducer } from './redux/reducers/tasks.reducer';
@NgModule({
  declarations: [
    AppComponent,
    TaskListHeaderComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskListFooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({tasks_reducer: get_tasks_reducer})
    // EffectsModule.forRoot([TasksEffects])
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

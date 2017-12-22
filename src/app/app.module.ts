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
    StoreModule.forRoot(reducers)
    // EffectsModule.forRoot([TasksEffects])
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

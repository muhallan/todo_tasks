import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskListFooterComponent } from './task-list-footer/task-list-footer.component';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';
import { TasksService } from './services/tasks.service';
import { EffectsModule } from '@ngrx/effects';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpInterceptor } from './services/http.interceptor';
import { httpInterceptorFactory } from './services/httpInterceptorFactory';

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
  providers: [TasksService, { provide: Http, deps: [XHRBackend, RequestOptions], useFactory: httpInterceptorFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }

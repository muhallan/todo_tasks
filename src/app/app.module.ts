import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskDataService } from './task-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [TaskDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

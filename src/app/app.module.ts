import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';
import { TodoItemAddComponent } from './todo-item-add/todo-item-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponentComponent,
    TodoItemComponentComponent,
    TodoItemAddComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item-add',
  templateUrl: './todo-item-add.component.html',
  styleUrls: ['./todo-item-add.component.css']
})

export class TodoItemAddComponent {

  @Input()
  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  addTodo(newTodo: Todo) {
    newTodo.complete = false;

    this.add.emit(this.newTodo);
    this.todoService.addTodo(newTodo);
    this.newTodo = new Todo();
  }

}

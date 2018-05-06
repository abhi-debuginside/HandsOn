import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})

@Injectable()
export class TodoListComponentComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getAllTodos();
  }


  onToggleTodoComplete(todo: Todo) {
    console.log('onToggleTodoComplete - list ' + todo.title + ' current status ' + todo.complete);
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    console.log('onRemoveTodo - list ' + todo.title + ' current status ' + todo.complete);

    this.todos = this.todoService.deleteFromList(todo, this.todos);
    console.log('onRemoveTodo - list ' + todo.title + ' current status ' + todo.complete);

    this.remove.emit(todo);
  }

}

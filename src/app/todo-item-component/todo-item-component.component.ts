import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.css']
})
export class TodoItemComponentComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();


  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }


  toggleTodoComplete(todo: Todo) {
    console.log('onToggleTodoComplete - Item ' + todo.title + ' current status ' + todo.complete);

    // toogle the completed status
    todo = this.todoService.toggleTodoCompleteStatus(todo);
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    console.log('removeTodo - Item ' + todo.title + ' current status ' + todo.complete);
    this.remove.emit(todo);
  }
}

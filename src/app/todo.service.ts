import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class TodoService {

  todos: Todo[];

  constructor() { }

  public getAllTodos(): Todo[] {
    this.todos = [
      { id: 1, complete: false, title: 'chumma1' },
      { id: 2, complete: false, title: 'chumma2' },
      { id: 3, complete: false, title: 'chumma3' },
      { id: 4, complete: false, title: 'chumma4' },
      { id: 5, complete: false, title: 'chumma5' },
      { id: 6, complete: false, title: 'chumma6' },
    ];

    return this.todos;
  }

  public toggleTodoCompleteStatus(todo: Todo): Todo {

    // toogle the completed staus
    if (todo.complete === true) {
      todo.complete = false;
    } else {
      todo.complete = true;
    }

    return todo;
  }

  public addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  public deleteFromList(todo: Todo): Todo[] {

    const index: number = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    return this.todos;
  }

}

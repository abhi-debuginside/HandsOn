import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemAddComponent } from './todo-item-add.component';

describe('TodoItemAddComponent', () => {
  let component: TodoItemAddComponent;
  let fixture: ComponentFixture<TodoItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

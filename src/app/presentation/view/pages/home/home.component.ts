import { Component, OnInit } from '@angular/core';
import { TaskEntity } from '../../../../domain/entities/task-entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: TaskEntity[] = [];
  newTodo: string = '';

  ngOnInit() {
    // Load todos from local storage (if any)
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ task: this.newTodo, completed: false });
      this.newTodo = '';
      this.saveTodos();
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  toggleCompleted(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
  }

  editTodo(index: number, newTask: string) {
    this.todos[index].task = newTask;
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

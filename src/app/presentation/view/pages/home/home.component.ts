import { Component, OnInit } from '@angular/core';
import { TaskEntity } from '../../../../domain/entities/task-entity';
import { ITaskController } from '../../../../domain/interfaces/controllers/itask-controller';
import { Observable, Subscription } from 'rxjs';
import { TaskCreateDto } from '../../../../domain/dtos/task/task-create-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasks$: Observable<TaskEntity[]> | null;
  private tasksUpdateSubscription: Subscription;

  newTodo: string = '';

  constructor(private service: ITaskController) {}

  ngOnInit() {
    this.tasks$ = this.service.get();

    this.tasksUpdateSubscription  = this.service.tasksUpdated$.subscribe(() => {
      this.tasks$ = this.service.get(); // Refresh tasks
    });
  }

  ngOnDestroy() {
    this.tasksUpdateSubscription.unsubscribe();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      const newTask: TaskCreateDto = { task: this.newTodo, completed: false }; // Build complete TaskEntity
      this.service.insert(newTask).subscribe(() => {
        // Successfully added, optionally refresh task list:
        // this.tasks$ = this.service.get();
      });
      this.newTodo = '';
    }
  }

  removeTodo(taskId: number) {
    this.service.delete(taskId).subscribe(() => {
      // Successfully deleted, optionally refresh task list
    });
  }

  toggleCompleted(index: number) {
    // this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
  }

  editTodo(index: number, newTask: string) {
    // this.todos[index].task = newTask;
    this.saveTodos();
  }

  saveTodos() {
    // localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private refreshTasks(): Observable<TaskEntity[]> | null {
    return this.service.get();
  }
}

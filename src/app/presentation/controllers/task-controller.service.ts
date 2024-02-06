import { Injectable } from '@angular/core';
import { ITaskController } from '../../domain/interfaces/controllers/itask-controller';
import {
  Observable,
  catchError,
  map,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { TaskEntity } from '../../domain/entities/task-entity';
import { ITaskUsecase } from '../../domain/interfaces/usecases/itask-usecase';

@Injectable({
  providedIn: 'root',
})
export class TaskControllerService implements ITaskController {
  private cachedTasks$: Observable<TaskEntity[]> | null = null;

  constructor(private taskUseCase: ITaskUsecase) {}
  get(): Observable<TaskEntity[]> | null {
    if (!this.cachedTasks$) {
      this.refreshTasksCache();
    }
    return this.cachedTasks$;
  }

  insert(task: TaskEntity): Observable<TaskEntity> {
    return this.taskUseCase.insert(task).pipe(
      map((newTask) => {
        return {
          ...newTask,
        };
      }),
      catchError((error) => {
        console.error('Error inserting task', error);
        return throwError(() => new Error('Failed to insert task'));
      }),
      tap(() => this.refreshTasksCache())
    );
  }

  update(task: TaskEntity): Observable<TaskEntity> {
    return this.taskUseCase.update(task).pipe(
      map((updatedTask) => {
        return {
          ...updatedTask,
        };
      }),
      catchError((error) => {
        console.error('Error updating task', error);
        return throwError(() => new Error('Failed to update task'));
      }),
      tap(() => this.refreshTasksCache())
    );
  }

  delete(id: number): Observable<void> {
    return this.taskUseCase.delete(id).pipe(
      catchError((error) => {
        console.error('Error deleting task', error);
        return throwError(() => new Error('Failed to delete task'));
      }),
      tap(() => this.refreshTasksCache())
    );
  }

  private refreshTasksCache(): void {
    this.cachedTasks$ = this.taskUseCase.get().pipe(
      map((tasks) =>
        tasks.map((task) => {
          return {
            ...task,
          };
        })
      ),
      catchError((error) => {
        console.error('Error fetching tasks', error);
        return throwError(() => new Error('Failed to fetch tasks'));
      }),
      shareReplay(1)
    );
  }
}

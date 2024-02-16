import { Injectable } from '@angular/core';
import { ITaskRepository } from '../interfaces/repository/itask-repository';
import { ITaskUsecase } from '../interfaces/usecases/itask-usecase';
import {
  Observable,
  Subject,
  catchError,
  map,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { TaskEntity } from '../entities/task-entity';
import { TaskCreateDto } from '../dtos/task/task-create-dto';

@Injectable({
  providedIn: 'root',
})
export class TaskUsecaseService implements ITaskUsecase {
  public tasksUpdated$ = new Subject<void>();

  private cachedTasks$: Observable<TaskEntity[]> | null = null;

  constructor(private taskRepository: ITaskRepository) {}

  get(): Observable<TaskEntity[]> | null {
    if (!this.cachedTasks$) {
      this.refreshTasksCache();
    }
    return this.cachedTasks$;
  }

  insert(task: TaskCreateDto): Observable<TaskEntity> {
    return this.taskRepository.insert(task).pipe(
      catchError((error) => {
        console.error('Error inserting task', error);
        return throwError(() => new Error('Failed to insert task'));
      }),
      tap((test) => {
        console.log(test)
        this.refreshTasksCache();
        this.tasksUpdated$.next();
      })
    );
  }

  update(task: TaskEntity): Observable<TaskEntity> {
    return this.taskRepository.update(task).pipe(
      catchError((error) => {
        console.error('Error updating task', error);
        return throwError(() => new Error('Failed to update task'));
      }),
      tap(() => {
        this.refreshTasksCache();
        this.tasksUpdated$.next();
      })
    );
  }

  delete(id: number): Observable<void> {
    return this.taskRepository.delete(id).pipe(
      catchError((error) => {
        console.error('Error deleting task', error);
        return throwError(() => new Error('Failed to delete task'));
      }),
      tap(() => {
        this.refreshTasksCache();
        this.tasksUpdated$.next();
      })
    );
  }

  private refreshTasksCache(): void {
    this.cachedTasks$ = this.taskRepository.get().pipe(
      map((tasks) => tasks.map((task) => ({ ...task }))),
      catchError((error) => {
        console.error('Error fetching tasks', error);
        return throwError(() => new Error('Failed to fetch tasks'));
      }),
      shareReplay(1)
    );
  }
}

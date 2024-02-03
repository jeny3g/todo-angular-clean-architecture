import { Injectable } from '@angular/core';
import { ITaskRepository } from '../interfaces/repository/itask-repository';
import { ITaskUsecase } from '../interfaces/usecases/itask-usecase';
import { Observable } from 'rxjs';
import { TaskEntity } from '../entities/task-entity';

@Injectable({
  providedIn: 'root'
})
export class TaskUsecaseService implements ITaskUsecase {

  constructor(
    private taskRepository: ITaskRepository,
  ) { }

  get(): Observable<TaskEntity[]> {
    return this.taskRepository.get();
  }

  insert(param: TaskEntity): Observable<TaskEntity> {
    throw new Error('Method not implemented.');
  }

  update(param: TaskEntity): Observable<TaskEntity> {
    throw new Error('Method not implemented.');
  }

  delete(id: number, status: boolean): Observable<TaskEntity> {
    throw new Error('Method not implemented.');
  }
}

import { Injectable } from '@angular/core';
import { ITaskController } from '../../domain/interfaces/controllers/itask-controller';
import { Observable } from 'rxjs';
import { TaskEntity } from '../../domain/entities/task-entity';
import { ITaskUsecase } from '../../domain/interfaces/usecases/itask-usecase';

@Injectable({
  providedIn: 'root',
})
export class TaskControllerService implements ITaskController {
  constructor(private taskUseCase: ITaskUsecase) {}

  get(): Observable<TaskEntity[]> | null {
    return this.taskUseCase.get();
  }

  insert(task: TaskEntity): Observable<TaskEntity> {
    return this.taskUseCase.insert(task);
  }

  update(task: TaskEntity): Observable<TaskEntity> {
    return this.taskUseCase.update(task);
  }

  delete(id: number): Observable<void> {
    return this.taskUseCase.delete(id);
  }
}

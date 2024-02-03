import { Observable } from 'rxjs';
import { TaskEntity } from '../../entities/task-entity';

export abstract class ITaskUsecase {
  abstract get(): Observable<TaskEntity[]>;
  abstract insert(param: TaskEntity): Observable<TaskEntity>;
  abstract update(param: TaskEntity): Observable<TaskEntity>;
  abstract delete(id: number, status: boolean): Observable<TaskEntity>;
}

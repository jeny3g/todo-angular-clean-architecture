import { Observable } from 'rxjs';
import { TaskEntity } from '../../entities/task-entity';

export abstract class ITaskRepository {
  abstract get(): Observable<TaskEntity[]>;
  abstract insert(task: TaskEntity): Observable<TaskEntity>;
  abstract update(task: TaskEntity): Observable<TaskEntity>;
  abstract delete(id: string): Observable<void>;
}

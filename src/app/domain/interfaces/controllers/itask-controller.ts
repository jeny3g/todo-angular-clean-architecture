import { Observable } from 'rxjs';
import { TaskEntity } from '../../entities/task-entity';

export abstract class ITaskController {
  abstract get(): Observable<TaskEntity[]> | null;
  abstract insert(task: TaskEntity): Observable<TaskEntity>;
  abstract update(task: TaskEntity): Observable<TaskEntity>;
  abstract delete(id: number): Observable<void>;
}

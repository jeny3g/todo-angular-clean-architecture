import { Observable } from 'rxjs';
import { TaskEntity } from '../../entities/task-entity';
import { TaskCreateDto } from '../../dtos/task/task-create-dto';

export abstract class ITaskRepository {
  abstract get(): Observable<TaskEntity[]>;
  abstract insert(task: TaskCreateDto): Observable<TaskEntity>;
  abstract update(task: TaskEntity): Observable<TaskEntity>;
  abstract delete(id: number): Observable<void>;
}

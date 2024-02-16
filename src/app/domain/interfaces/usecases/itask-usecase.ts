import { Observable } from 'rxjs';
import { TaskEntity } from '../../entities/task-entity';
import { TaskCreateDto } from '../../dtos/task/task-create-dto';

export abstract class ITaskUsecase {
  abstract get(): Observable<TaskEntity[]> | null;
  abstract insert(param: TaskCreateDto): Observable<TaskEntity>;
  abstract update(param: TaskEntity): Observable<TaskEntity>;
  abstract delete(id: number): Observable<void>;
  abstract get tasksUpdated$(): Observable<void>;
}

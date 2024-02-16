import { Observable, Subject } from 'rxjs';
import { TaskEntity } from '../../entities/task-entity';
import { TaskCreateDto } from '../../dtos/task/task-create-dto';

export abstract class ITaskController {
  abstract get(): Observable<TaskEntity[]> | null;
  abstract insert(task: TaskCreateDto): Observable<TaskEntity>;
  abstract update(task: TaskEntity): Observable<TaskEntity>;
  abstract delete(id: number): Observable<void>;
  abstract get tasksUpdated$(): Observable<void>;
}

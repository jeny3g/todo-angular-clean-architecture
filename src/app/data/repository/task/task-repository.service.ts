import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITaskRepository } from '../../../domain/interfaces/repository/itask-repository';
import { Observable } from 'rxjs';
import { TaskEntity } from '../../../domain/entities/task-entity';
import { environment } from '../../../../environments/environment.prod';
import { TaskCreateDto } from '../../../domain/dtos/task/task-create-dto';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryService implements ITaskRepository {
  // private mapper = new TaskMapper();

  constructor(private http: HttpClient) {}

  get(): Observable<TaskEntity[]> {
    return this.http.get<TaskEntity[]>(environment.serverUrl + '/tasks');
  }

  insert(task: TaskCreateDto): Observable<TaskEntity> {
    console.log(task)
    return this.http.post<TaskEntity>(`${environment.serverUrl}/tasks`, task);
  }

  update(task: TaskEntity): Observable<TaskEntity> {
    return this.http.put<TaskEntity>(
      `${environment.serverUrl}/tasks/${task.id}`,
      task
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/tasks/${id}`);
  }
}

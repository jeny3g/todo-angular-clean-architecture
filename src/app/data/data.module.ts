import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ITaskRepository } from '../domain/interfaces/repository/itask-repository';
import { TaskRepositoryService } from './repository/task/task-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    {
      provide: ITaskRepository, useClass: TaskRepositoryService
    }
  ]
})
export class DataModule { }

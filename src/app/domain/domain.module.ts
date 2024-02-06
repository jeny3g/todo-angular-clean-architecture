import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITaskUsecase } from './interfaces/usecases/itask-usecase';
import { TaskUsecaseService } from './usecases/task-usecase.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: ITaskUsecase, useClass: TaskUsecaseService }],
})
export class DomainModule {}

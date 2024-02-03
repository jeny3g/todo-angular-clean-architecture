import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IValidatorMessage } from './interfaces/message/ivalidator-message';
import { ValidatorMessageService } from './message/validator-message.service';
import { ITaskUsecase } from './interfaces/usecases/itask-usecase';
import { TaskUsecaseService } from './usecases/task-usecase.service';
import { ITaskValidator } from './interfaces/validations/itask-validator';
import { TaskValidatorService } from './validations/task/task-validator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: IValidatorMessage, useClass: ValidatorMessageService },
    { provide: ITaskUsecase, useClass: TaskUsecaseService },
    { provide: ITaskValidator, useClass: TaskValidatorService },

  ]
})
export class DomainModule { }

import { Injectable } from '@angular/core';
import { ITaskValidator } from '../../interfaces/validations/itask-validator';
import { TaskEntity } from '../../entities/task-entity';
import { IValidatorMessage } from '../../interfaces/message/ivalidator-message';

@Injectable({
  providedIn: 'root'
})
export class TaskValidatorService implements ITaskValidator {
  constructor(
    protected validatorMessage: IValidatorMessage
  ) { }

  validateFields(param: TaskEntity) : void {
  }
}

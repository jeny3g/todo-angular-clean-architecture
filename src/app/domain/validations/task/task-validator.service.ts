import { Injectable } from '@angular/core';
import { ITaskValidator } from '../../interfaces/validations/itask-validator';
import { TaskEntity } from '../../entities/task-entity';
import { IValidatorMessage } from '../../interfaces/message/ivalidator-message';
import { ValidationResult, Validator, IValidator } from 'ts.validator.fluent/dist';

@Injectable({
  providedIn: 'root'
})
export class TaskValidatorService implements ITaskValidator {
  constructor(
    protected validatorMessage: IValidatorMessage
  ) { }

  validateFields(param: TaskEntity): ValidationResult {
    return new Validator(param).Validate(this.validateRules);
  }

  validateRules = (validator: IValidator<TaskEntity>): ValidationResult => {
    return validator
      .NotEmpty(m => m.title, this.validatorMessage.required('Titulo').value)
      .ToResult();
  }
}

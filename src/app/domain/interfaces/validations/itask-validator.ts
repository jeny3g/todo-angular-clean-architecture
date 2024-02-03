// import { ValidationResult } from 'ts.validator.fluent/dist';
import { ValidationResult } from 'ts.validator.fluent/dist';
import { TaskEntity } from '../../entities/task-entity';

export abstract class ITaskValidator {
  abstract validateFields(param: TaskEntity) : ValidationResult ;
}

import { TaskEntity } from '../../entities/task-entity';

export abstract class ITaskValidator {
  abstract validateFields(param: TaskEntity): void;
}

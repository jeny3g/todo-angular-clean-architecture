import { DomainEntity } from "./base/domain-entity";

export class TaskEntity extends DomainEntity {
  task: string = '';
  completed: boolean = false;
}

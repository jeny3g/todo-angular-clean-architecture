import { DomainEntity } from "./base/domain-entity";

export class TaskEntity extends DomainEntity {
  title: string = '';
  completed: boolean = false;
}

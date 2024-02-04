import { DomainEntity } from './base/domain-entity';

export class UserEntity extends DomainEntity {
  username?: string | null = null;
  password?: string | null = null;
  email?: string | null = null;
  token?: string | null = null;
}

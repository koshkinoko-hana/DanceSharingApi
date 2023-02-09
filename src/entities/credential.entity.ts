import { Entity } from 'mikro-orm';
import { Auditable } from './auditable.entity';

@Entity()
export class Credential extends Auditable {
  passwordHash: string;

  constructor(props: Omit<Credential, keyof Auditable>) {
    super();
    this.passwordHash = props.passwordHash;
  }
}

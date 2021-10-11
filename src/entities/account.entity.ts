import { Entity, ManyToOne, OneToOne, Property } from 'mikro-orm';
import { Auditable } from './auditable.entity';
import { Credential } from './credential.entity';
import { Role } from './role.entity';
import { User } from './user.entity';

@Entity()
export class Account extends Auditable {
  @Property()
  login: string;

  @ManyToOne(() => Role)
  role: Role;

  @OneToOne({ owner: true })
  credential: Credential;

  @OneToOne({ owner: true })
  profile?: User;

  constructor(props: Omit<Account, keyof Auditable>) {
    super();
    this.login = props.login;
    this.role = props.role;
    this.credential = props.credential;
  }
}

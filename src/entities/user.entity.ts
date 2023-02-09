import { Entity, Property } from 'mikro-orm';
import { Auditable } from './auditable.entity';

@Entity()
export class User extends Auditable {
  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  birthDate: Date;

  @Property({ nullable: true })
  phone?: string;

  constructor(props: Omit<User, keyof Auditable>) {
    super();
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.birthDate = props.birthDate;
    this.phone = props.phone;
  }
}

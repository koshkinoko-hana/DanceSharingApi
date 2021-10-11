import { Entity, Property } from 'mikro-orm';
import { Identified } from './identified.entity';

@Entity()
export class Role extends Identified {
  @Property()
  name: string;

  constructor(props: Omit<Role, keyof Identified>) {
    super();
    this.name = props.name;
  }
}

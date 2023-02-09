import { PrimaryKey } from 'mikro-orm';

export class Identified {
  @PrimaryKey()
  id!: number;
}

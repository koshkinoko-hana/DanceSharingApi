import { registerAs } from '@nestjs/config';
import mikroOrm from './mikro-orm';

export default [registerAs('mikro-orm', mikroOrm)];

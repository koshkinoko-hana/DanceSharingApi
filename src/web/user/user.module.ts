import { LoggerModule } from '@logger';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [LoggerModule.forFeature([UserService, UserController])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

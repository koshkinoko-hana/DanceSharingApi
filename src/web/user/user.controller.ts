import { InjectLogger, Logger } from '@logger';
import { Controller, Get, Param } from '@nestjs/common';
import { FindAllResponse } from '@web/user/dto/find-all.response';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    @InjectLogger(UserController)
    private readonly logger: Logger,
    private readonly userService: UserService,
  ) {
    this.logger.child('constructor').trace('<>');
  }

  @Get()
  public async getUsers(): Promise<FindAllResponse.User[]> {
    const logger = this.logger.child('getUsers');
    logger.trace('>');
    return this.userService.getUsers();
  }

  @Get(':id')
  public async getUser(@Param('id') id: number): Promise<FindAllResponse.User> {
    const logger = this.logger.child('getUser', { id });
    logger.trace('>');
    return this.userService.getUser(id);
  }
}

import { User } from '@entities';
import { InjectLogger, Logger } from '@logger';
import { Injectable } from '@nestjs/common';
import { notFoundHandler } from '@utils/mikro-orm';
import { FindAllResponse } from '@web/user/dto/find-all.response';
import { FindResponse } from '@web/user/dto/find.response';
import { EntityManager } from 'mikro-orm';

@Injectable()
export class UserService {
  constructor(
    @InjectLogger(UserService)
    private readonly logger: Logger,
    private readonly em: EntityManager,
  ) {
    this.logger.child('constructor').trace('<>');
  }

  public async getUsers(): Promise<FindAllResponse.User[]> {
    const logger = this.logger.child('getUsers');
    logger.trace('>');
    const users = await this.em.find(User, {});
    logger.trace({ users });
    const res = users.map((u) => new FindAllResponse.User(u));
    logger.trace({ res });
    return res;
  }

  public async getUser(id: number): Promise<FindAllResponse.User> {
    const logger = this.logger.child('getUsers');
    logger.trace('>');
    const user = await this.em.findOneOrFail(
      User,
      { id },
      { failHandler: notFoundHandler(logger) },
    );
    logger.trace({ user });
    const res = new FindResponse.User(user);
    logger.trace({ res });
    return res;
  }
}

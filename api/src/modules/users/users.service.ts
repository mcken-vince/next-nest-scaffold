import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '@entities';
import { UserDto } from '@dto';
import { BaseService } from '@base/base.service';

@Injectable()
export class UsersService extends BaseService<UserEntity> {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly _userRepository: typeof UserEntity
  ) {
    super(_userRepository);
  }

  async create(user: UserDto): Promise<UserEntity> {
    return await this._userRepository.create({ ...user });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return await this._userRepository.findOne({ where: { email } });
  }

  async findOneById(id: number): Promise<UserEntity> {
    return await this._userRepository.findOne({ where: { id } });
  }
}

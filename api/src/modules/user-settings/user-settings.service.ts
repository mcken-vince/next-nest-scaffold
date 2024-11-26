import { Inject, Injectable } from '@nestjs/common';
import { UserSettingsEntity } from '@entities';
import { UserSettingsDto } from '@dto';
import { BaseService } from '@base/base.service';

@Injectable()
export class UserSettingsService extends BaseService<UserSettingsEntity> {
  constructor(
    @Inject('USER_SETTINGS_REPOSITORY')
    private readonly _userSettingsRepository: typeof UserSettingsEntity
  ) {
    super(_userSettingsRepository);
  }

  async create(input: UserSettingsDto): Promise<UserSettingsEntity> {
    return this._userSettingsRepository.create({ ...input });
  }

  async findByUserId(idUser: number): Promise<UserSettingsEntity> {
    const [settings] = await this._userSettingsRepository.findOrCreate({
      where: { idUser },
    });
    return settings;
  }
}

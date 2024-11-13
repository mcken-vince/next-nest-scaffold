import { Inject, Injectable } from '@nestjs/common';
import { NotificationEntity } from '@entities';
import { NotificationDto } from '@dto';
import { BaseService } from '@base/base.service';

@Injectable()
export class NotificationService extends BaseService<NotificationEntity> {
  constructor(
    @Inject('NOTIFICATION_REPOSITORY')
    private readonly _notificationRepository: typeof NotificationEntity
  ) {
    super(_notificationRepository);
  }

  async create(input: NotificationDto): Promise<NotificationEntity> {
    return await this._notificationRepository.create({ ...input });
  }
}

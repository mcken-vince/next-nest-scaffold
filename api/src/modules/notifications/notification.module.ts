import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { notificationProviders } from './notification.providers';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationService, ...notificationProviders],
  exports: [NotificationService],
})
export class NotificationModule {}

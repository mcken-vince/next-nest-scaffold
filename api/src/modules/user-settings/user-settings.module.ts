import { Module } from '@nestjs/common';
import { UserSettingsController } from './user-settings.controller';
import { UserSettingsService } from './user-settings.service';
import { userSettingsProviders } from './user-settings.providers';

@Module({
  imports: [],
  controllers: [UserSettingsController],
  providers: [UserSettingsService, ...userSettingsProviders],
  exports: [UserSettingsService],
})
export class UserSettingsModule {}

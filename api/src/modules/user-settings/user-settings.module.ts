import { Module } from '@nestjs/common';
import { UserSettingsController } from './user-settings.controller';
import { UserSettingsService } from './user-settings.service';
import { userSettingsProviders } from './user-settings.providers';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
  controllers: [UserSettingsController],
  providers: [UserSettingsService, ...userSettingsProviders],
  exports: [UserSettingsService],
})
export class UserSettingsModule {}

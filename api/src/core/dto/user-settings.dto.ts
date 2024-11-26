import { IsBoolean, IsOptional } from 'class-validator';

export class UserSettingsDto {
  @IsOptional()
  @IsBoolean()
  readonly allowAppNotifications?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly allowEmailNotifications?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly use2FA?: boolean;
}

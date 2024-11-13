import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumber,
  IsDate,
  IsOptional,
} from 'class-validator';

export class NotificationDto {
  @IsNumber()
  readonly idUser: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50, { message: 'Limit is 50 characters' })
  readonly eventName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255, { message: 'Limit is 255 characters' })
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly body: string;

  @IsOptional()
  @IsDate()
  sentAt: Date;

  @IsOptional()
  @IsDate()
  readAt: Date;
}

import {
  Column,
  DataType,
  HasMany,
  HasOne,
  IsEmail,
  Max,
  Min,
  Table,
} from 'sequelize-typescript';
import { BaseEntity } from '@base/base.entity';
import { UserSettingsEntity } from './user-settings.entity';

@Table({ tableName: 'User' })
export class UserEntity extends BaseEntity {
  @IsEmail
  @Max(255)
  @Column({ type: DataType.STRING(255), unique: true, allowNull: false })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Min(1)
  @Max(255)
  @Column({ type: DataType.STRING(255), allowNull: false })
  firstName: string;

  @Min(1)
  @Max(255)
  @Column({ type: DataType.STRING(255), allowNull: false })
  lastName: string;

  // Relations

  @HasOne(() => UserSettingsEntity)
  settings: UserSettingsEntity;
}

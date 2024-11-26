import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { BaseEntity } from '@base/base.entity';
import { UserEntity } from './user.entity';

@Table({ tableName: 'UserSettings' })
export class UserSettingsEntity extends BaseEntity {
  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.INTEGER, unique: true, allowNull: false })
  idUser: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  allowAppNotifications: boolean;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  allowEmailNotifications: boolean;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  use2FA: boolean;
}

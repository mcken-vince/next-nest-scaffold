import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { BaseEntity } from '@base/base.entity';
import { UserEntity } from './user.entity';

@Table({ tableName: 'Notification' })
export class NotificationEntity extends BaseEntity {
  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.INTEGER })
  idUser: number;

  @Column({ type: DataType.STRING(50) })
  eventName: string;

  @Column({ type: DataType.STRING(255) })
  title: string;

  @Column({ type: DataType.TEXT })
  body: string;

  @Column({ type: DataType.DATE, allowNull: true })
  sentAt: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  readAt: Date;

  @Column({ type: DataType.STRING(25) })
  status: string;
}

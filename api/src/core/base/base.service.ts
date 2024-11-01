import { Repository } from 'sequelize-typescript';
import { BaseEntity } from '@base/base.entity';

export class BaseService<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}
}

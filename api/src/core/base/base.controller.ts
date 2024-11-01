import { Controller } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseService } from './base.service';

@Controller()
export class BaseController<T extends BaseEntity> {
  constructor(private readonly service: BaseService<T>) {}
}

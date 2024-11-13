import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { BaseController } from '@base/base.controller';
import { NotificationEntity } from '@entities';

@Controller('notification')
export class NotificationController extends BaseController<NotificationEntity> {
  constructor(private readonly _service: NotificationService) {
    super(_service);
  }

  @Post('create')
  async create(@Body() input: any) {
    return this._service.create(input);
  }

  // @Get('email/:email')
  // async findOneByEmail(@Param('email') email: string) {
  //   return this._service.findOneByEmail(email);
  // }

  // @Get(':id')
  // async findOneById(@Param('id') id: number): Promise<UserEntity> {
  //   return this._usersService.findOneById(id);
  // }
}

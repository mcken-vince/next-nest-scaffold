import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserSettingsService } from './user-settings.service';
import { BaseController } from '@base/base.controller';
import { UserSettingsEntity } from '@entities';

@Controller('user-settings')
export class UserSettingsController extends BaseController<UserSettingsEntity> {
  constructor(private readonly _service: UserSettingsService) {
    super(_service);
  }

  // @Post('create')
  // async create(@Body() input: any) {
  //   return this._service.create(input);
  // }

  // @Get('email/:email')
  // async findOneByEmail(@Param('email') email: string) {
  //   return this._service.findOneByEmail(email);
  // }

  @Get(':id')
  async findByUserId(@Param('id') id: number): Promise<UserSettingsEntity> {
    return this._service.findByUserId(id);
  }
}

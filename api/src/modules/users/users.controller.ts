import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { BaseController } from '@base/base.controller';
import { UserEntity } from '@entities';

@Controller('user')
export class UsersController extends BaseController<UserEntity> {
  constructor(private readonly _usersService: UsersService) {
    super(_usersService)
  }

  // @Post('create')
  // async create(@Body() input: any) {
  //   return this._usersService.create(input);
  // }

  @Get('email/:email')
  async findOneByEmail(@Param('email') email: string) {
    return this._usersService.findOneByEmail(email);
  }

  // @Get(':id')
  // async findOneById(@Param('id') id: number): Promise<UserEntity> {
  //   return this._usersService.findOneById(id);
  // }
}

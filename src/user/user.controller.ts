import { Body, Controller, Post } from '@nestjs/common';
import { UserController } from './presentation/protocols/controller';

@Controller('/users')
export class UserMainController {
  constructor(private _signup: UserController) {}

  @Post()
  async createUser(@Body() account) {
    return this._signup.handle(account);
  }
}

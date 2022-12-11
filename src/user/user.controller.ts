import { Body, Controller, Post } from '@nestjs/common';
import SignUpController from './presentation/controllers/SignUp';

@Controller('/users')
export class UserController {
  constructor(private _signup: SignUpController) {}

  @Post()
  async createUser(@Body() account) {
    return this._signup.handle(account);
  }
}

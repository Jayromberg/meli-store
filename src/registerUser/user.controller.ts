import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { SignUpProtocol } from './presentation/protocols/signUp.protocol';

@Controller('/users')
export class UserMainController {
  constructor(private _signup: SignUpProtocol) {}

  @Post()
  async createUser(@Body() account: CreateUserDto) {
    return this._signup.handle(account);
  }
}

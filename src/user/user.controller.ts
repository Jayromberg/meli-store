import { Body, Controller, Post } from '@nestjs/common';
import { SingUpDTO } from './dto/singUp.DTO';
import { SignUpProtocol } from './presentation/protocols/signUp.protocol';

@Controller('/users')
export class UserMainController {
  constructor(private _signup: SignUpProtocol) {}

  @Post()
  async createUser(@Body() account: SingUpDTO) {
    return this._signup.handle(account);
  }
}

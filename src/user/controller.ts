import { Body, Controller, Post } from '@nestjs/common';

@Controller('/users')
export class UsuarioController {
  @Post()
  async createUser(@Body() account) {
    return account;
  }
}

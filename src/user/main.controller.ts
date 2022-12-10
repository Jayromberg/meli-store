import { Body, Controller, Post } from '@nestjs/common';

@Controller('/users')
export class MainController {
  @Post()
  async createUser(@Body() account) {
    return account;
  }
}

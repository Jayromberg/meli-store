import { Module } from '@nestjs/common';
import SignUpController from './presentation/controllers/SignUp';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [SignUpController],
})
export class UserModule {}

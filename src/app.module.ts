import { Module } from '@nestjs/common';
import { UserModule } from './registerUser/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database.module';
import { userProviders } from 'src/infra/providers/user';
import { DbAddAccount } from './data/DbAddAccount';
import { AddUserRepo } from './data/protocols/addUserRepo';
import { BCrypt } from './data/providers/encrypter/BCrypt';
import { Encrypt } from './data/providers/encrypter/encrypt';
import { UserRepository } from './data/providers/sequelize/user.repository';
import { AddAccount } from './domain/use-case/add-account';
import { SignUpController } from './presentation/controllers/SignUp';
import { UserController } from './presentation/protocols/controller';
import { UserMainController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserMainController],
  providers: [
    ...userProviders,
    {
      provide: AddUserRepo,
      useClass: UserRepository,
    },
    {
      provide: Encrypt,
      useClass: BCrypt,
    },
    {
      provide: AddAccount,
      useClass: DbAddAccount,
    },
    {
      provide: UserController,
      useClass: SignUpController,
    },
  ],
})
export class UserModule {}

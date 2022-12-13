import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database.module';
import { userProviders } from 'src/infra/providers/user.providers';
import { DbAddAccount } from './data/DbAddAccount';
import { AddUserRepo } from './data/protocols/addUserRepo';
import { BCrypt } from './data/providers/encrypter/BCrypt';
import { Encrypt } from './data/providers/encrypter/encrypt';
import { UserRepository } from './data/providers/repositories/user.repository';
import { AddAccount } from './domain/use-case/add-account';
import { SignUp } from './presentation/SignUp';
import { SignUpProtocol } from './presentation/protocols/signUp.protocol';
import { UserMainController } from './user.controller';
import { TokenGenerator } from './data/providers/generator/tokenGenerator';
import { Jwt } from './data/providers/generator/jwt';

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
      provide: TokenGenerator,
      useClass: Jwt,
    },
    {
      provide: AddAccount,
      useClass: DbAddAccount,
    },
    {
      provide: SignUpProtocol,
      useClass: SignUp,
    },
  ],
})
export class UserModule {}

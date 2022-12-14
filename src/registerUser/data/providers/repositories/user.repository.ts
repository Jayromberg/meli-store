import { Injectable, Inject } from '@nestjs/common';
import { AccountModel } from 'src/registerUser/domain/entity/account';
import { AddAccountModel } from 'src/registerUser/domain/use-case/add-account';
import { User } from '../../../../infra/models/user.model';
import { AddUserRepo } from '../../protocols/addUserRepo';
import { USER_REPOSITORY } from 'src/constants';

@Injectable()
export class UserRepository implements AddUserRepo {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: typeof User,
  ) {}

  async findByEmail(email: string): Promise<AccountModel> {
    return this.userRepository.findOne<User>({
      where: { email },
    });
  }

  async create(account: AddAccountModel): Promise<AccountModel> {
    return this.userRepository.create<User>(account);
  }
}

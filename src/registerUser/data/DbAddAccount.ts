import { AddAccount, AddAccountModel } from '../domain/use-case/add-account';
import { Encrypt } from './providers/encrypter/encrypt';
import { AddUserRepo } from './protocols/addUserRepo';
import { ConflictEmailError } from '../../errors';
import { Injectable } from '@nestjs/common';
import { TokenGenerator } from './providers/generator/tokenGenerator';

@Injectable()
export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypt;
  private readonly addUserRepo: AddUserRepo;
  private readonly tokenGenerator: TokenGenerator;

  constructor(
    addUserRepo: AddUserRepo,
    encrypter: Encrypt,
    tokenGenerator: TokenGenerator,
  ) {
    this.addUserRepo = addUserRepo;
    this.encrypter = encrypter;
    this.tokenGenerator = tokenGenerator;
  }

  async add(account: AddAccountModel): Promise<string> {
    const { username, role, email, password } = account;
    const isUser = await this.addUserRepo.findByEmail(email);
    if (isUser) throw new ConflictEmailError(email);
    const hash = await this.encrypter.encrypt(password);
    const newAccount = await this.addUserRepo.create({
      username,
      role,
      email,
      password: hash,
    });
    const token = this.tokenGenerator.generator(
      newAccount.id,
      newAccount.email,
    );
    return token;
  }
}

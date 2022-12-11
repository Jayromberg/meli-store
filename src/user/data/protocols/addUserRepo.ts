import { AccountModel } from '../../domain/entity/account';
import { AddAccountModel } from '../../domain/use-case/add-account';

export abstract class AddUserRepo {
  abstract findByEmail(email: string): Promise<AccountModel | null>;
  abstract create(account: AddAccountModel): Promise<AccountModel>;
}

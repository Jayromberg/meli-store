import { AccountModel } from '../entity/account';

export type AddAccountModel = Omit<AccountModel, 'id'>;

export abstract class AddAccount {
  abstract add(account: AddAccountModel): Promise<AccountModel>;
}

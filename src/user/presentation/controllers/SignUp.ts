import { Injectable } from '@nestjs/common';
import { UserController } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';
import { badRequest, created } from '../helpers/http-helpers';
import { AddAccount } from '../../domain/use-case/add-account';

@Injectable()
export class SignUpController implements UserController {
  private readonly addAccount: AddAccount;

  constructor(addAccount: AddAccount) {
    this.addAccount = addAccount;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { username, role, email, password } = httpRequest;
      const response = await this.addAccount.add({
        username,
        role,
        email,
        password,
      });
      return created(response);
    } catch (error) {
      return badRequest(error);
    }
  }
}

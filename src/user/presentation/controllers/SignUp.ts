import { Injectable } from '@nestjs/common';
import { Controller } from '../protocols/controller';
import { HttpRequest, HttpResponse } from '../protocols/http';
import { badRequest, created } from '../helpers/http-helpers';
import { AddAccount } from '../../domain/use-case/add-account';

@Injectable()
export default class SignUpController implements Controller {
  private readonly addAccount: AddAccount;

  constructor(addAccount: AddAccount) {
    this.addAccount = addAccount;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password } = httpRequest.body;
      const response = await this.addAccount.add({ name, email, password });
      return created(response);
    } catch (error) {
      return badRequest(error);
    }
  }
}

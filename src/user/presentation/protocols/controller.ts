import { HttpRequest, HttpResponse } from './http';

export abstract class UserController {
  abstract handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

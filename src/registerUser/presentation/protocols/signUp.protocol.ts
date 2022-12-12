import { HttpRequest, HttpResponse } from './http';

export abstract class SignUpProtocol {
  abstract handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

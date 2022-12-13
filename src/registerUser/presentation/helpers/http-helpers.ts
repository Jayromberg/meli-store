import { HttpResponse } from '../protocols/http';

export const created = (response: any): HttpResponse => ({
  token: response,
});

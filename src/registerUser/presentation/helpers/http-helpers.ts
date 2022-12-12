import { HttpResponse } from '../protocols/http';

export const created = (response: any): HttpResponse => ({
  id: response.id,
  username: response.username,
  role: response.role,
  email: response.email,
});

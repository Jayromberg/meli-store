import { HttpResponse } from '../protocols/http';

export const created = (body: any): HttpResponse => ({
  ...body,
});

export const badRequest = (error: any): any => ({
  message: error.message,
});

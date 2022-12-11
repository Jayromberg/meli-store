import { HttpException, HttpStatus } from '@nestjs/common';

export class MissingParamError extends HttpException {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`, HttpStatus.BAD_REQUEST);
  }
}

export class ConflictEmailError extends HttpException {
  constructor(email: string) {
    super(`The email ${email} is already registered`, HttpStatus.CONFLICT);
  }
}

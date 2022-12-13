import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { TokenGenerator } from './tokenGenerator';

@Injectable()
export class Jwt implements TokenGenerator {
  private _jwt = jwt;

  generator(id: string | number, role: string): string {
    const payload = {
      id,
      role,
    };

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const secret = process.env.JWT_SECRET;
    const token = this._jwt.sign(payload, secret, jwtConfig);

    return token;
  }
}

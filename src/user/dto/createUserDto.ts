import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  role: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}

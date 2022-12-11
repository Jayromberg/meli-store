import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  role: number;

  @Column
  email: string;

  @Column
  password: string;
}

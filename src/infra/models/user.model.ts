import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  id: string;

  @Column
  username: string;

  @Column
  role: string;

  @Column
  email: string;

  @Column
  password: string;
}

import { Table, Column, Model } from 'sequelize-typescript';
import { randomUUID } from 'crypto';

@Table({
  underscored: true,
  modelName: 'users',
  timestamps: false,
})
export class User extends Model {
  @Column({ primaryKey: true, defaultValue: randomUUID() })
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

import { Table, Column, Model } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
  underscored: true,
  modelName: 'users',
  timestamps: false,
})
export class User extends Model {
  @Column({ primaryKey: true, defaultValue: uuidv4() })
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

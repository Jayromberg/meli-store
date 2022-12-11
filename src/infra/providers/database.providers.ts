import 'dotenv/config';
import { Sequelize } from 'sequelize-typescript';
import * as config from '../config/database';
import { User } from '../models/user.model';
import { SEQUELIZE } from 'src/constants';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(config);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

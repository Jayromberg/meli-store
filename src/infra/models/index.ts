import { Sequelize } from 'sequelize';
import * as config from '../providers/database';

export default new Sequelize(config);

import { User } from '../models/user.model';
import { USER_REPOSITORY } from 'src/constants';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];

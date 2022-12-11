import { User } from '../models/user.model';

export const catsProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];

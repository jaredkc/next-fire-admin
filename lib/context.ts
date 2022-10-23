import { User } from 'firebase/auth';
import { createContext } from 'react';

interface IUserData {
  user: User | null | undefined;
  username: string | null;
  permissions: { [key: string]: boolean };
}

export const UserContext = createContext<IUserData>({
  user: null,
  username: null,
  permissions: {},
});

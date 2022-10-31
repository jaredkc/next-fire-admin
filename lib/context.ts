import { User } from 'firebase/auth';
import { createContext } from 'react';

interface IUserData {
  loading: boolean;
  permissions: { [key: string]: boolean };
  user: User | null | undefined;
  username: string | null;
}

export const UserContext = createContext<IUserData>({
  loading: true,
  permissions: {},
  user: null,
  username: null,
});

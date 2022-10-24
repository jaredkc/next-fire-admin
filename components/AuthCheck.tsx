import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import Alert from './Alert';

type Props = {
  children: React.ReactNode;
  permission: string;
};

/**
 * Components children are only shown to logged-in users that have permission.
 * Permissions are loaded from the user’s Firestore document.
 */
export default function AuthCheck({ children, permission }: Props) {
  const { user, permissions } = useContext(UserContext);

  if (!user) {
    return <Alert message="Whoa! You need to sign in first." />;
  }

  if (hasPermission(permissions, permission)) return <>{children}</>;

  return (
    <Alert message="Sorry! You do not have permission to view this content." />
  );
}

function hasPermission(
  permissions: { [key: string]: boolean },
  permission: string
) {
  if (permissions?.admin || permissions?.[permission]) return true;
}

import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  permission: string;
}

/**
 * Components children are only shown to logged-in users that have permission.
 * Permissions are loaded from the user’s Firestore document.
 */
export default function AuthCheck({ children, fallback, permission }: Props) {
  const { permissions } = useContext(UserContext);

  if (hasPermission(permissions, permission)) return <>{children}</>;

  return <>{fallback || <Link href="/signin">You must be signed in</Link>}</>;
}

function hasPermission(permissions:{ [key: string]: boolean }, permission: string) {
  if (permissions?.admin || permissions?.[permission]) return true;
}

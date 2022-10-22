import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { auth } from '../lib/firebase';

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  const router = useRouter();

  const signOutNow = () => {
    signOut(auth);
    router.reload();
  };

  return (
    <nav className="flex justify-between px-6 py-4 border-b">
      <Link href="/">
        <a>AdminApp</a>
      </Link>

      {user && (
        <div>
          <button onClick={signOutNow}>Sign Out</button>
          <img
            src={user?.photoURL || '/fpo-user.jpg'}
            alt={username || 'User photo placeholder'}
            width={32}
            height={32}
            className="inline-block w-8 h-8 ml-4 overflow-hidden rounded-full bg-slate-200"
          />
        </div>
      )}

      {!user && (
        <Link href="/signin">
          <a>Log in</a>
        </Link>
      )}
    </nav>
  );
}

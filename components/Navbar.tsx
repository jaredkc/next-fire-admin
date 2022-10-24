import { signOut } from 'firebase/auth';
import Image from 'next/image';
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
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-white border-b">
      <Link href="/">
        <a>AdminApp</a>
      </Link>

      {user && (
        <div className="flex items-center gap-4">
          <button onClick={signOutNow}>Sign Out</button>
          <Image
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
          <a>Sign in</a>
        </Link>
      )}
    </nav>
  );
}

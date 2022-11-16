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
    <nav className="flex flex-col items-center w-full gap-8 px-6 py-4 text-sm bg-white border-b sm:flex-row sm:justify-between">
      <Link href="/" className="px-2 py-1 font-semibold rounded bg-slate-700 text-slate-200">
        AdminApp
      </Link>

      <ul className="flex gap-4">
        <li>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link href="/orders" className="hover:underline">
            Orders
          </Link>
        </li>
      </ul>

      {user && (
        <div className="flex items-center gap-3">
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
        <Link href="/signin" className="hover:underline">
          Sign in
        </Link>
      )}
    </nav>
  );
}

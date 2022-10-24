import { signInWithPopup, signOut } from 'firebase/auth';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useContext } from 'react';
import Metafields from '../components/Metafields';
import { UserContext } from '../lib/context';
import { auth, googleAuthProvider } from '../lib/firebase';


const buttonCommn =
  'inline-flex gap-3 items-center px-6 py-3 text-base font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2';
const buttonLight = `bg-white hover:bg-gray-50 ${buttonCommn}`;
const buttonPrimary = `bg-indigo-600 text-white border-transparent hover:bg-indigo-700 ${buttonCommn}`;

const SignIn: NextPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Metafields title ="Sign in" />

      {user ? <SignOutButton /> : <SignInButton />}
    </>
  );
};

export default SignIn;

function SignInButton() {
  // TODO: add error handling try/catch
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className={buttonLight} onClick={signInWithGoogle}>
      <Image
        src="/google.png"
        alt="Google sign in icon"
        width={16}
        height={16}
      />{' '}
      Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return (
    <button onClick={() => signOut(auth)} className={buttonPrimary}>
      Sign Out
    </button>
  );
}

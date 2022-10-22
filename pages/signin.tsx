import { signInWithPopup, signOut } from 'firebase/auth';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';

import { UserContext } from '../lib/context';
import { auth, googleAuthProvider } from '../lib/firebase';

const SignIn: NextPage = () => {
  const { user, username } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sign in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <ul className="m-8">
          <li>User: {user ? user.email : 'No user'}</li>
          <li>Username: {username || 'No username'}</li>
        </ul>
        {user ? <SignOutButton /> : <SignInButton />}
      </main>
    </div>
  );
};

export default SignIn;

function SignInButton() {
  // TODO: add error handling try/catch
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
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
  return <button onClick={() => signOut(auth)}>Sign Out</button>;
}

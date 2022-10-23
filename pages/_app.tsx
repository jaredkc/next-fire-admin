import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();
  return (
    <>
      <UserContext.Provider value={userData}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Navbar />
          <div className="flex flex-col items-center justify-center flex-1 w-full p-4 md:p-8">
            <Component {...pageProps} />
          </div>
        </div>
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;

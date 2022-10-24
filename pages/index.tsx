import type { NextPage } from 'next';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Metafields from '../components/Metafields';

const Home: NextPage = () => {
  return (
    <div>
      <Metafields />

      <main className="text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
          , <br />
          running on Firebase!
        </h1>

        <p className="mt-3 text-2xl">
          See the{' '}
          <Link href="/about">
            <a className="underline">about page</a>
          </Link>{' '}
          for routing example.
        </p>
        <button onClick={() => toast.success('hello toast!')}>Toast Notification</button>
      </main>
    </div>
  );
};

export default Home;

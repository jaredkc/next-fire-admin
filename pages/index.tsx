import type { NextPage } from 'next';
import toast from 'react-hot-toast';
import Metafields from '../components/Metafields';

const Home: NextPage = () => {
  return (
    <div>
      <Metafields />

      <main className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Welcome to Next.js, <br />
          running on Firebase!
        </h1>
        <div className="flex flex-col max-w-lg gap-8 mx-auto my-8 text-xl">
          <p>
            Permissions are loaded from the user&apos;s document in Firestore, backed
            up by Firestore rules on the server.
          </p>
          <p>
            Notifications included with <code>react-hot-toast</code>,{' '}
            <button
              onClick={() => toast.success('hello toast!')}
              className="font-semibold underline"
            >
              Toast me
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;

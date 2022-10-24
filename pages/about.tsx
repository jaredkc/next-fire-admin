import type { NextPage } from 'next';
import Link from 'next/link';
import Metafields from '../components/Metafields';

const About: NextPage = () => {
  return (
    <div>
      <Metafields title ="About" />

      <main className="text-center">
        <h1 className="text-6xl font-bold">About NextFireAdmin</h1>

        <p className="mt-3 text-2xl">
          Back to the{' '}
          <Link href="/">
            <a className="underline">home page</a>
          </Link>
          .
        </p>
      </main>
    </div>
  );
};

export default About;

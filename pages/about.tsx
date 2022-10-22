import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NextFireAdmin / About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">About NextFireAdmin</h1>

        <p className="mt-3 text-2xl">
          Back to the{' '}
          <Link href="/">
            <a className='underline'>home page</a>
          </Link>
          .
        </p>
      </main>
    </div>
  );
};

export default About;

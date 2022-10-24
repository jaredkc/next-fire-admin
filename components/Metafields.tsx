import Head from 'next/head';

export default function Metafields({ title = 'NextFireAdmin' }) {
  if (title !== 'NextFireAdmin') {
    title = `${title} · NextFireAdmin`;
  }
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

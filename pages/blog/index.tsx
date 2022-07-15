import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav, Landing } from '../../components';

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metricks Pre Launch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav colored={true} />
      <div className="text-4xl font-medium text-center p-12">Blog</div>
    </>
  );
};

export default Blog;

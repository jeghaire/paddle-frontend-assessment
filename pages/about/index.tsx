import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '../../components';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metricks Pre Launch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav colored={true} />
      <div className="text-4xl font-medium text-center p-12">About</div>
    </>
  );
};

export default About;

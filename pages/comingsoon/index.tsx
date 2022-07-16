import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav, Landing, Footer } from '../../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metricks Pre Launch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav colored={true} />
      <Landing />
      <Footer />
    </>
  );
};

export default Home;

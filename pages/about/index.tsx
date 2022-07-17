import type { NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '../../components';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Metricks Pre Launch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav colored={true} />
      <div className="text-4xl font-medium text-center p-12">About</div>

      <div className="">
        <div>
          <h3>About us</h3>
          <h1>Built for Saas and E-commerce</h1>
        </div>
        <div>
          <p>Our tools are easy yo set up and use with a user friendly dashboard that enables you to set up, launch automate and manage multi-affiliate campaigns in 5 minutes.</p>
        </div>
      </div>

      <div className="">
        <h1>Ecommerce</h1>
        <div className=""></div>
        <h1 className="text-5xl">
          Metricks was developed because just like you, we needed a product that could give us <span className="font-bold">good value</span>
        </h1>
        <div className="">
          <div className="">
            <h4>Why us</h4>
            <p>We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touch-points between advertisers and affiliates.</p>
          </div>
          <div className=""></div>
        </div>

        <div className="">
          <div className="">
            <h2 className="">Got a Question?</h2>
            <p className="">See how Metricks can help your business grow with best affiliate marketing tracking software.</p>
            <Link href="">
              <a className="">Contact Us</a>
            </Link>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default About;

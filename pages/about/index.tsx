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
      <div className="min-h-screen bg-[url('/background.png')] bg-no-repeat bg-center bg-origin-border bg-local text-white transition-all duration-500 ease-in-out">
        <div className="flex h-[70vh] w-full">
          <div className="w-4/6 h-full flex justify-end items-center">
            <div className="w-fit flex flex-col">
              <h3 className="text-base uppercase self-start">About us</h3>
              <h1 className="text-5xl">
                Built for Saas <br /> and E-commerce
              </h1>
            </div>
          </div>
          <div className="flex-1">
            <p className="w-4/6 font-thin text-sm m-auto">Our tools are easy to set up and use with a user friendly dashboard that enables you to set up, launch automate and manage multi-affiliate campaigns in 5 minutes.</p>
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
      </div>
    </>
  );
};

export default About;

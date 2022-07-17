import Link from 'next/link';

export default function About() {
  return (
    <div className="">
      <h1>Ecommerce</h1>
      <div className=""></div>
      <h1 className="text-5xl">Metricks was developed because just like you, we needed a product that could give us <span className="font-bold">good value</span></h1>
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="">
        <h2 className="">Got a Question?</h2>
        <p className="">See how Metricks can help your business grow with best affiliate marketing tracking software.</p>
        <Link href="">
          <a className="">Contact Us</a>
        </Link>
      </div>
    </div>
  )
}
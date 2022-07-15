import Image from 'next/image'
import Link from 'next/link'


const navMenuOptions = ['about', 'blog', 'contact us']

export default function nav({ colored }) {
  return (
    <nav className={`flex items-center justify-center md:justify-start px-32 py-5 uppercase text-white ${colored ? 'bg-[#19073B]' : 'bg-white text-black'}`}>
      <Link href="/">
        <a className="flex flex-col items-center justify-center space-y-1 outline-none">
          <Image
            src="/metricks.png"
            height={30}
            width={50}
            objectFit="contain"
            className="w-fit"
          />
          <span className="font-medium">Metricks</span>
        </a>
      </Link>
      <ul className="hidden md:flex items-center ml-auto">
        {navMenuOptions.map(item => (
          <li key={`link-${item}`} className="flex justify-end mr-12 last:m-0 last:py-4 last:px-8 last:rounded-full last:bg-[#271AC1]">
            <div />
            <Link href={`${item}`}>
              <a className="p-0 text-sm font-medium transition duration-300 ease-in-out">{item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav >
  )
}
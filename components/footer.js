import Link from 'next/link'
import { AiFillInstagram, AiFillYoutube, AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="flex -z-50 flex-col items-center justify-center py-10 px-6 bg-[url('/background.png')] bg-no-repeat bg-bottom bg-origin-border bg-local text-white text-xs ssm:text-sm font-light">
      <div className="flex items-center justify-center space-x-6 z-[1]">
        <AiFillYoutube className="w-9 h-9 opacity-[.54] hover:opacity-100 cursor-pointer" />
        <AiFillFacebook className="w-8 h-8 opacity-[.54] hover:opacity-100 cursor-pointer" />
        <AiFillLinkedin className="w-8 h-8 opacity-[.54] hover:opacity-100 cursor-pointer" />
        <AiFillInstagram className="w-8 h-8 opacity-[.54] hover:opacity-100 cursor-pointer" />
        <AiFillTwitterSquare className="w-8 h-8 opacity-[.54] hover:opacity-100 cursor-pointer" />
      </div>
      <div className="flex space-x-10 m-5">
        <Link href="/">
          <a href="/" className="opacity-[.61] hover:opacity-100 hover:underline hover:underline-offset-4">Terms of Services</a>
        </Link>
        <Link href="/">
          <a href="/" className="opacity-[.61] hover:opacity-100 hover:underline hover:underline-offset-4">Privacy Policy</a>
        </Link>
      </div>
      <p className="opacity-[.61] text-center">copyright 2021 @Peddle Technonlogies. All rights reserved.</p>
    </div>
  )
}
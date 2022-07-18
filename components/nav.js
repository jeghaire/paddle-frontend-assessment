import Image from 'next/image'
import Link from 'next/link'
import { useModalContext } from "../context/ModalContext"
import { Modal, Contact } from '../components'
import { useEffect, useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const navMenuOptions = [
  { title: 'about us', href: 'about' },
  { title: 'blog', href: 'blog' }
]

export default function nav({ colored, active }) {
  const [page, setPage] = useState('/comingsoon')
  const [toggled, setToggled] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    setPage(path)
  }, [])

  const { isOpen, openModal, closeModal } = useModalContext()

  return (
    <nav className={`flex items-center justify-center md:justify-start px-10 sm:px-32 py-5 uppercase text-white ${colored ? 'bg-[#19073B]' : 'bg-white text-black'}`}>
      <Link href="/">
        <a className="flex flex-col items-center justify-center space-y-1 outline-none">
          <Image
            src="/logo.svg"
            // src="/metricks.png"
            height={30}
            width={50}
            objectFit="contain"
            className="w-fit"
          />
          <span className="font-medium">Metricks</span>
        </a>
      </Link>
      <ul className="hidden md:flex items-center ml-auto">
        {navMenuOptions.map(({ title, href }) => (
          <li key={`${href}`} className="flex justify-end mr-12">
            <div />
            <Link href={`${href}`}>
              <a className={`p-3 text-xs tracking-widest transition duration-300 ease-in-out hover:underline hover:underline-offset-8 ${page === "/" + href ? 'cursor-default text-[#FF00F7]' : ''}`}>{title}</a>
            </Link>
          </li>
        ))}
        <button onClick={openModal} className="m-0 py-4 px-8 rounded-full bg-[#271AC1] p-0 text-xs transition duration-300 outline-none ease-in-out">CONTACT US</button>
      </ul>

      <div className="ml-auto md:hidden">
        <HiMenuAlt4 onClick={() => setToggled(true)} className="justify-end w-9 h-9 p-1 text-white rounded-full relative flex justify-center items-center bg-base-accent" />
        {toggled && (
          <>
            <div
              className="fixed top-0 right-0 bottom-0 z-[2000] p-3 w-9/12 max-h-screen h-screen items-end bg-white bg-[url('/images/bgWhite.png')] bg-cover bg-repeat shadow-lg"
            >
              <ul className="h-full w-full flex flex-col ">
                <HiX onClick={() => setToggled(false)} className="justify-self-center text-black h-6 w-6 ml-auto mx-6 my-8" />
                {navMenuOptions.map(({ title, href }) => (
                  <li key={`${href}`} className="flex justify-end mr-12 z-[2001]" onClick={() => setToggled(false)}>
                    <div />
                    {/* <Link href={`${href}`}>
                      <a className={`p-3 text-xs tracking-widest transition duration-300 ease-in-out ${page === "/" + href ? 'underline underline-offset-8 text-[#FF00F7]' : ''}`}>{title}</a>
                    </Link> */}
                    <Link href={`${href}`}>
                      <a className={`block w-full h-full ml-3 pb-2 pt-8 text-black text-center font-normal text-sm uppercase transition duration-300 ease-in-out hover:underline hover:underline-offset-4 ${page === "/" + href ? 'cursor-default text-[#FF00F7]' : ''}`}>{title}</a>
                    </Link>
                  </li>
                ))}
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Contact />
      </Modal>
    </nav >
  )
}
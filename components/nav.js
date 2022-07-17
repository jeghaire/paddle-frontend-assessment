import Image from 'next/image'
import Link from 'next/link'
import { useModalContext } from "../context/ModalContext"
import { Modal, Contact } from '../components'

const navMenuOptions = [{ title: 'about us', link: 'about' }, { title: 'blog', link: 'blog' }]

export default function nav({ colored }) {
  const { isOpen, openModal, closeModal } = useModalContext()

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
        {navMenuOptions.map(({ title, link }) => (
          <li key={`${link}`} className="flex justify-end mr-12">
            <div />
            <Link href={`${link}`}>
              <a className="p-3 text-xs tracking-widest transition duration-300 ease-in-out">{title}</a>
            </Link>
          </li>
        ))}
        <button onClick={openModal} className="m-0 py-4 px-8 rounded-full bg-[#271AC1] p-0 text-xs transition duration-300 outline-none ease-in-out">CONTACT US</button>
      </ul>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Contact />
      </Modal>
    </nav >
  )
}
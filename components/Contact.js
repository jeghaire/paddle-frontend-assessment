import { useModalContext } from '../context/ModalContext'
import { HiOutlineArrowRight } from 'react-icons/hi'

export default function Contact() {
  const { closeModal } = useModalContext()

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form className="bg-gradient-to-b from-[#210045] to-[#0C0123] m-0 p-32 pl-20  w-full h-full text-white" onSubmit={handleSignUp}>
        <button onClick={closeModal} type="submit" className="closeModalBtn"><HiOutlineArrowRight className="w-7 h-7 text-sm text-[#271AC1]" /></button>
        <div className="w-36 h-36 bg-gradient-to-b from-[#213F72] to-[#19073B] opacity-60 z-[0] rounded-full absolute top-52 right-48"></div>
        <h2 className="text-3xl text-center leading-snug tracking-wide transition-all duration-50 ease-in-out z-[1]">Hey, we are still in the works, but you can send us a message!</h2>
        <div className="w-full mt-6">
          <p className="font-light text-sm p-3 pl-0">First Name</p>
          <input type="text" className="w-full rounded-xl py-5 px-8 text-sm leading-6 text-slate-700 shadow-sm outline-none lg:flex" />
        </div>
        <div className="w-full mt-6">
          <p className="font-light text-sm p-3 pl-0">First Name</p>
          <input type="text" className="w-full rounded-xl py-5 px-8 text-sm leading-6 text-slate-700 shadow-sm outline-none lg:flex" />
        </div>
        <div className="w-full mt-6">
          <p className="font-light text-sm p-3 pl-0">First Name</p>
          <input type="text" className="w-full rounded-xl py-5 px-8 text-sm leading-6 text-slate-700 shadow-sm outline-none lg:flex" />
        </div>
        <button onClick={closeModal} type="submit" className="m-0 mt-12 py-5 px-8 rounded-full bg-[#271AC1] p-0 text-sm transition duration-300 outline-none ease-in-out">SEND NOW</button>
      </form>
    </>
  )
}

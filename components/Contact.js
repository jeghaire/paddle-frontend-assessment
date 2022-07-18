import { useModalContext } from '../context/ModalContext'
import { HiOutlineArrowRight } from 'react-icons/hi'

export default function Contact() {
  const { closeModal } = useModalContext()

  const handleSignUp = (e) => {
    e.preventDefault()
    closeModal()
  }

  return (
    <>
      <form className="bg-gradient-to-bl from-[#210045] to-[#0C0123] m-0 p-6 pb-20 sm:p-32 pt-36 sm:pl-16  w-full h-full text-white" onSubmit={handleSignUp}>
        <button onClick={closeModal} type="submit" className="closeModalBtn"><HiOutlineArrowRight className="w-7 h-7 text-sm text-[#271AC1]" /></button>
        <div className="w-36 h-36 bg-gradient-to-b from-[#213F72] to-[#19073B] opacity-60 rounded-full absolute top-60 sm:top-68 right-10 sm:right-48 z-[0]" />
        <h2 className="text-lg sm:text-3xl text-center py-4 leading-snug tracking-wide transition-all duration-50 ease-in-out">Hey, we are still in the works, <br /> but you can send us a message!</h2>
        <div className="w-full mt-6">
          <p className="font-thin text-sm p-4 pl-0">First Name</p>
          <input
            type="text"
            className="w-full bg-white placeholder:capitalize rounded-xl py-5 px-8 text-sm font-thin placeholder:font-thin leading-6 text-black placeholder:text-slate-700 shadow-sm outline-none lg:flex z-[100]"
            placeholder="Enter your First name"
          />
        </div>
        <div className="w-full font-thin mt-6">
          <p className="font-thin text-sm p-4 pl-0">Last Name</p>
          <input
            type="text"
            className="w-full bg-white placeholder:capitalize rounded-xl py-5 px-8 text-sm font-thin placeholder:font-thin leading-6 text-black placeholder:text-slate-700 shadow-sm outline-none lg:flex"
            placeholder="Enter your Last name"
          />
        </div>
        <div className="w-full font-thin mt-6">
          <p className="font-thin text-sm p-4 pl-0">Email Address</p>
          <input
            type="text"
            className="w-full bg-white placeholder:capitalize rounded-xl py-5 px-8 text-sm font-thin placeholder:font-thin leading-6 text-black placeholder:text-slate-700 shadow-sm outline-none lg:flex"
            placeholder="Enter your Last name"
          />
        </div>
        <div className="w-full font-thin mt-6">
          <p className="font-thin text-sm p-4 pl-0 capitalize">Tell us what you need help with:</p>
          <textarea
            className="w-full bg-white placeholder:capitalize rounded-xl py-5 px-8 text-sm font-thin placeholder:font-thin leading-6 text-black placeholder:text-slate-700 shadow-sm outline-none lg:flex"
            rows="8"
            cols="40"
            placeholder="Enter a topic, like channel problem.."
          >
          </textarea>
        </div>
        <button onClick={closeModal} type="submit" className="m-0 mt-12 py-5 px-9 rounded-full bg-[#271AC1] p-0 text-base tracking-widest transition duration-300 outline-none ease-in-out">SEND NOW</button>
      </form>
    </>
  )
}

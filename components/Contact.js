export default function SignUp({ closeModalFunction }) {
  const handleSignUp = (e) => {
    e.preventDefault()
    closeModalFunction()
  }

  return (
    <>
      <form className="bg-gradient-to-b from-[#210045] to-[#0C0123] m-0 w-full h-full" onSubmit={handleSignUp}>

      </form>
    </>
  )
}

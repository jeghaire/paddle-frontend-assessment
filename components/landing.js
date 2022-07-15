export default function landing() {
  return (
    <>
      <div className="relative min-h-screen bg-[url('/background.png')] bg-no-repeat bg-center bg-origin-border bg-local text-white">
        <div className="text-center w-3/4 ssm:w-full max-w-2xl m-auto py-20 px-0 ssm:px-6 md:px-0">
          <h1 className="text-[2.5rem] ssm:text-5xl font-bold uppercase leading-snug tracking-wide">Something awesome is coming soon</h1>
          <p className="font-extralight leading-7 tracking-wide mt-5 whitespace-normal">Your all-in-one affiliate marketing tracking software <span className="font-medium">track, automate</span> and <span className="font-medium">optimize</span> your campaigns.</p>
          <div className="flex flex-col ssm:flex-row items-center justify-center space-y-3 ssm:space-y-0 md:space-x-3 my-6 mx-auto w-3/4 md:w-full">
            <div className="flex flex-row items-center justify-center space-x-3">
              <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
                <span className="font-semibold text-4xl pb-3.5 pt-3">7</span> Days
              </div>
              <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
                <span className="font-semibold text-4xl pb-3.5 pt-3">24</span> Hours
              </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-3 ssm:ml-3">
              <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
                <span className="font-semibold text-4xl pb-3 pt-3">54</span> Minutes
              </div>
              <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
                <span className="font-semibold text-4xl pb-3.5 pt-3">11</span> Seconds
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row max-w-xs sm:max-w-md space-y-6 sm:space-y-0 space-x-0 sm:space-x-6 items-center justify-center mt-16 p-4 mx-auto">
            <input type="text" placeholder="First Name.." className="flex-1 w-full bg-transparent border-black/12 border-b placeholder:text-[#707070] text-[#090909]/91 outline-none text-xs py-1.5 px-3" />
            <input type="text" placeholder="Last Name.." className="flex-1 w-full bg-transparent border-black/12 border-b placeholder:text-[#707070] text-[#090909]/91 outline-none text-xs py-1.5 px-3 " />
          </div>
          <div className="bg-transparent max-w-lg mx-auto mt-4 flex text-xs">
            <input type="email" placeholder="Enter your email address.." className="flex items-center justify-center bg-white placeholder:text-black/80 text-black rounded-full text-[0.83rem] shadow my-[0.1em] py-5 pl-8 pr-20 border-none outline-none flex-1 " />
            <button type="submit" className="hidden ssm:flex items-center justify-center m-0 py-[1.2rem] px-6 -ml-16 rounded-full shadow border-none outline-none bg-[#271AC1] uppercase">Join Our waiting list</button>
          </div>
        </div>
        <div className="w-28 h-28 bg-gradient-to-b from-[#7F1E7B] to-[#19073B] rounded-full absolute top-0 left-5 sm:top-8 sm:left-56 md:top-8 md:left-56"></div>
        <div className="w-20 h-20 bg-gradient-to-b from-[#213F72] to-[#19073B] rounded-full absolute top-48 right-80"></div>
        <div className="w-32 h-32 bg-gradient-to-b from-[#7F4129] to-[#1C0C28] rounded-full absolute bottom-8 left-80"></div>
      </div>
    </>
  )
}
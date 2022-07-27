import { useState, useEffect } from 'react'
import { getRemainingTimeUntilMsTimestamp } from '../lib/countdown'


const defaultTimeRemaining = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00"
}

const CountdownTimer = ({ countdownMs }) => {
  const [timeRemaining, setTimeRemaining] = useState(defaultTimeRemaining)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTimeRemaining(countdownMs)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [countdownMs])

  function updateTimeRemaining(countdown) {
    setTimeRemaining(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <>
      <div className="flex flex-col ssm:flex-row items-center justify-center space-y-3 ssm:space-y-0 md:space-x-3 my-6 mx-auto w-3/4 md:w-full">
        <div className="flex flex-row items-center justify-center space-x-3">
          <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
            <span className="font-semibold text-4xl pb-3.5 pt-3 w-[2ch]">{timeRemaining.days}</span> Days
              </div>
          <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
            <span className="font-semibold text-4xl pb-3.5 pt-3 w-[2ch]">{timeRemaining.hours}</span> Hours
              </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-3 ssm:ml-3">
          <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
            <span className="font-semibold text-4xl pb-3 pt-3 w-[2ch]">{timeRemaining.minutes}</span> Minutes
              </div>
          <div className="w-24 h-[6.9rem] rounded-md flex flex-col items-center justify-center bg-white text-black text-sm font-medium">
            <span className="font-semibold text-4xl pb-3.5 pt-3 w-[2ch]">{timeRemaining.seconds}</span> Seconds
              </div>
        </div>
      </div>
    </>
  )
}

export default CountdownTimer

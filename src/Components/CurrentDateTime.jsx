import React, { useEffect, useState } from 'react'

const CurrentDateTime = () => {
  const [currTime, setCurrTime]=useState(new Date())
  useEffect(()=>{
    const timer=setInterval(()=>{
      setCurrTime(new Date())
    }, 1000)
    return ()=>clearInterval(timer)
  }, [])
  return (
    <div className='flex items-center justify-center  flex-col mt-5'>
      <h1 className='font-bold text-2xl md:text-3xl xl:text-4xl '>{new Date().toLocaleTimeString()}</h1>
      <p className='font-semibold text-sm md:text-xl lg:text-2xl mt-1' >{new Date().toLocaleDateString()}</p>
    </div>
  )
}

export default CurrentDateTime
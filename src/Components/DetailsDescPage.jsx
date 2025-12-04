import React from 'react'
import LeftSide from './DetailsDesc/LeftSide'
import Middle from './DetailsDesc/Middle'
import RightSide from './DetailsDesc/RightSide'

const DetailsDescPage = () => {
  return (
    <div className='backdrop-blur-2xl bg-white/15 border rounded-xl border-gray-500 shadow-xl px-5 py-3 lg:px-10 lg:py-4 flex gap-5 flex-wrap  justify-center'>
        <LeftSide/>
        
        <Middle/>
        <RightSide/>
    </div>
  )
}

export default DetailsDescPage
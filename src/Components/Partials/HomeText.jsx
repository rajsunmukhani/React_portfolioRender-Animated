import React from 'react'

const HomeText = () => {
  return (
    <div className='absolute top-[33%] flex w-[93%] justify-between h-[23vh]'>
        <div className='flex items-end'>
            <div className='flex items-center gap-5 rounded-e-full px-10 py-5 text-white bg-[#1C1D20]'>
                <h3 className='text-lg leading-none font-normal'>Located <br /> in the <br /> NeitherLands </h3>
                <i className="ri-global-line text-4xl bg-gray-400 p-5 rounded-full font-normal"></i>
            </div>
        </div>
        <div className='flex flex-col justify-between text-white text-3xl'>
            <i className="ri-arrow-right-down-line"></i>
            <h3 className='text-4xl'>Freelance <br /> Designer & Developer </h3>
        </div>
    </div>
  )
}

export default HomeText
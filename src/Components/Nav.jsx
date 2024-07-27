import React from 'react'
import NavLeft from './Partials/NavLeft'
import NavRight from './Partials/NavRight'

const Nav = () => {
  return (
    <div className='flex w-full items-center justify-between py-9 px-12 text-white fixed'>
        <NavLeft />
        <NavRight />
    </div>
  )
}

export default Nav
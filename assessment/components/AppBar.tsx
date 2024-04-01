import logo from '../images/Vector.png'
import React from 'react'
import Image from 'next/image'

const AppBar = () => {
  return (
    <header className='flex gap-4 p-4  items-center px-16 mx-auto'>

        <div className='flex items-center space-x-1 font-bold text-3xl'>
            <div className='w-10'>
                <Image src={logo} alt='Logo' ></Image>
            </div>
            <div className='flex'>
                <p className='text-logo-1'>Hakim</p><p className='text-logo-2'>Hub</p>
            </div>
        </div>
        <div className='grow justify-center  text-base '>
        <ul className='flex justify-center space-x-12 font-bold'>
            <li>Home</li>
            <li>Hospitals</li>
            <li>Doctors</li>
        </ul>
        </div>
      <div className='flex space-x-5 items-center'>
        <div className='rounded-full bg-avatar-bg px-4 py-2 text-white'>K</div>
        <button className='rounded-full border px-4 py-1'>Logout</button>
      </div>
    </header>
  )
}
export default AppBar
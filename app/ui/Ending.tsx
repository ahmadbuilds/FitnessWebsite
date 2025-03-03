import React from 'react'
import Image from 'next/image'
import { lustina } from '../lib/font'
const Ending = () => {
  return (
    <div className='bg-red-100 px-5 py-8 flex flex-col gap-10 items-center justify-center'>
      <Image
        src={'/Logo-1.png'}
        alt='Footer Image'
        width={200}
        height={200}
        />
      <p className={`${lustina.className} antialiased font-semibold text-lg`}>Made by AhmadBuilds.</p>
    </div>
  )
}

export default Ending

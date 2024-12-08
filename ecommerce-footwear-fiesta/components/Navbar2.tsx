"use client"
import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

function Navbar2() {
    const [openMenu , setOpenMenu] = useState<string |null>(null)

    const handleMouseEnter = (menu:string) => {
      setOpenMenu(menu)
    }
    
    const handleMouseLeave = () => {
      setOpenMenu(null)
    }
    

  return (
    <div>
        {/* menu area */}
 <div className='bg-gray-400 p-4'>
  <ul className='relative flex justify-center space-x-3 sm:space-x-8 sm:text-2xl'>

<Link href="/">
    <li className='hover:underline cursor-pointer'>Home</li>
    </Link>
    
    <li className='relative hover:underline cursor-pointer' onMouseEnter={() => handleMouseEnter("women")} onMouseLeave={handleMouseLeave}>Shop

      {openMenu === 'women' && (
        <div className='absolute top-full bg-white p-4 sm:w-[400px] left-0 mt-2 shadow-xl' onMouseEnter={() => handleMouseEnter("women")} onMouseLeave={handleMouseLeave}>
          <h1 className='text-4xl text-gray-700 font'>CATEGORY</h1>
          <ul>
            <Link href="shoes">
           <li className='cursor-pointer hover:underline'>shoes</li>
            </Link>

            <Link href="heels">
            <li className='cursor-pointer hover:underline'>heels</li>
            </Link>

            <Link href="flat">
            <li className='cursor-pointer hover:underline'>flat</li>
            </Link>
            
          </ul>
        </div>
      )}
    </li>
<li className='hover:underline cursor-pointe'>New Arrivals</li>
<li className='hover:underline cursor-pointer'>Contact</li>
</ul>
 </div>
    </div>
  )
}

export default Navbar2
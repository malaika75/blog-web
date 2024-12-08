"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

function Navbar() {

  return (
    <>
    <div className='flex justify-between'>
      <Image src="https://i.imgur.com/yboElnu.png" alt="shoes" height={100} width={100} className='mt-9 w-5/12 h-30 md:w-6/12 md:h-40 md:ml-5 md:mt-0' quality={100} placeholder="empty" unoptimized />
      <div className='flex md:space-x-20 space-x-14 mt-4 lg:ml-6 -ml-20 sm:mr-18'>
        <div className='flex text-xl border-2 border-gray-500 rounded-full w-9/12 h-12 hover:border-black overflow-hidden'>
        <i className="fa-solid fa-magnifying-glass mt-3 ml-2"></i>
        <input type="text" placeholder='search here' className='outline-none text-sm' id='search'></input>
        </div>
        <ul className='md:text-4xl sm:text-2xl flex relative right-12 mt-4 sm:mt-2'>
        <i className="fa-regular fa-heart mr-8 hover:text-red-600 cursor-pointer ml4" title='Wishlist'></i>
        <i className="fa-brands fa-opencart hover:cursor-pointer -ml-4" title='Cart'></i>
        </ul>
</div>
</div>

</>   


    
  )
}

export default Navbar

// https://media.istockphoto.com/id/1130477331/vector/pair-of-new-sport-running-shoes.jpg?s=612x612&w=0&k=20&c=8u5xjYBwIIndJ_Z2Is9C0i-mDR1Es-sKFbVv5KLxVU4=

// https://media.istockphoto.com/id/473522996/vector/footwear-sale-banner-design.jpg?s=612x612&w=0&k=20&c=Ic6r5RwyOsR5ppa7ORhmB-2OvI7E6jBVOtzVx6TdlOM=

// https://media.istockphoto.com/id/1351480781/vector/megaphone-with-up-to-70-persent-off-speech-bubble-banner-loudspeaker-label-for-business.jpg?s=612x612&w=0&k=20&c=rYkKf--wTTHrh5jIR3ghempExYeio5gv7aZf7sIJnK0=

// https://media.istockphoto.com/id/1465931136/vector/30-percent-special-offer-mega-sale-check-and-gift-box-sale-banner-and-poster-vector.jpg?s=612x612&w=0&k=20&c=Oyqf8D2ycI2XPm7zjIW7gT0vcrJHmbufdSoGVdYW1SM=

// https://media.istockphoto.com/id/1673465474/vector/error-404-page-not-found-page-not-found-text-oops-looks-like-something-went-wrong-3d-web.jpg?s=612x612&w=0&k=20&c=KfaGFDeSrf6fahGrivDDdBnBQNO7M79iZMhczZHaFEo=
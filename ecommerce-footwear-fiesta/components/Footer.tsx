import React from 'react'

function Footer() {
  return (
    <div className='mt-[2200px] bg-gray-700 py-10'>
      <div className='md:ml-20 ml-4 mb-10 space-x-5'>
      <i className="fa-brands fa-facebook fa-2x text-blue-600 hover:scale-90"></i>
      <i className="fa-brands fa-square-instagram fa-2x text-[rgb(226,156,90)] hover:scale-90"></i>
      <i className="fa-brands fa-tiktok fa-2x text-white hover:scale-90"></i>
      </div>

      <div className='grid grid-cols-2 md:space-x-28 space-x-3 text-white'>
      <div className='w-3/2 sm:mx-12 ml-4'>
      <h1 className='sm:text-2xl text-xl'>shoeluxe</h1>
      <p className='mt-2 text-gray-400'>At ShoeLuxe, we believe that every step should be a statement. Our carefully curated collection combines style, quality, and comfort, offering footwear that fits seamlessly into both classic and contemporary wardrobes. Whether you're dressing for elegance or everyday wear, ShoeLuxe provides an exceptional variety to meet your unique tastes. Join us in exploring a world of shoes that go beyond fashion—they’re a lifestyle.</p>
      </div>
<div className='sm:ml-12'>
  <h1 className='text-2xl'>support</h1>
  <ul className='text-gray-400 text-md'>
    <li>about us</li>
    <li>Privacy Policy</li>
    <li>Return and refund policy</li>
    <li>shipping policy</li>
    <li>Terms and Conditions</li>
    <li>FaQs</li>
  </ul>
</div>
</div>
<h1 className='text-white sm:ml-16 ml-4 mb-10 mt-3 font-mono'>All rights reserved @2024 shoeluxe</h1>

    </div>
  )
}

export default Footer
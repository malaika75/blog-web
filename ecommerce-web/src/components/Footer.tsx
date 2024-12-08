import React from 'react'

function Footer() {
  return (
    <>
    <div className='mt-20 grid xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-black text-white text-center p-16'>
      <div className='ml-4'>
      <ul>
        <li className='text-xl font-bold'>Exclusive</li>
        <li className='mt-2'>Subscribe</li>
        <li className='mt-2'>Get 10% off your first order</li>
        </ul>

        <div className='flex items-center border-2 border-gray-200 text-white w-11/12 mt-2'>
        <input type='text' placeholder='enter your email' className='bg-black p-2 border-white outline-none w-11/12'></input>
        <i className="fa-solid fa-paper-plane transform rotate-[45deg] text-xl sm:-ml-9 -ml-4 cursor-pointer"></i>
        </div>
        </div>

        <div>
          <ul>
            <li className='font-bold mb-4 mt-10 sm:mt-0'>support</li>
            <li className='mt-2'>11 bijay sirani dhaka,
              <span>DH 1515 , Bangladesh</span>
            </li>
            <li className='mt-2'>exclusive@gmail.com</li>
            <li className='mt-2'>+88015-88888-9999</li>
          </ul>
          </div>

          <div>
            <ul className='mt-10 md:mt-0'>
              <li className='font-bold mb-4'>Account</li>
              <li className='mt-2'>my acount</li>
              <li className='mt-2'>login / register</li>
              <li className='mt-2'>cart</li>
              <li className='mt-2'>wishlist</li>
              <li className='mt-2'>shop</li>
            </ul>
          </div>

          <div>
            <ul className='mt-10 md:mt-0'>
              <li className='font-bold mb-4'>Quick link</li>
              <li className='mt-2'>privacy policy</li>
              <li className='mt-2'>terms Of Use</li>
              <li className='mt-2'>FAQ</li>
              <li className='mt-2'>Contact</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className='font-bold mb-4 mt-10 md:mt-0'>Download App</li>
              <li className='mt-2'>Save $3 with app new users only</li>
            </ul>
            
            <div className='flex space-x-3 mt-2'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MSeP9-tHEBAiDsSyaqUdrCj6Nb3FrmCxOQ&s" alt="qr" className='h-32'/>
              <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="play store" className=''/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLwBFEP8AZ8tUiJtH1JgUT8l0Sw7z5O19Yg&s" alt="app store"/>
         </div>
         </div>
         <div className=''>

              <ul className='text-xl lg:space-x-10 sm:space-x-6 space-x-2 mt-4 mb-4 flex'>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </ul>
              
            </div>
          
          </div>
    </div>
    <div className='bg-black text-center'> 
      <p className='text-gray-400 p-4'>@Copyright Rimel 2022. All right reserved </p>
    </div>
    </>
  )
}

export default Footer
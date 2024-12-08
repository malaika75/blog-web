import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className=' grid grid-cols-1 lg:grid-cols-2 justifybetween'>
   
   <div className="border-r mr-80 h-72">
    <ul className='lg:ml-16 sm:p-6  p-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 text-md'>
      <li className="mt-3">Women's Fashion</li>
      <li className="mt-2">Mens Fashion</li>
      <li className="mt-2">Electronics</li>
      <li className="mt-2">Home & Fashion</li>
      <li className="mt-2">Medicine</li>
      <li className="mt-2">Sports and Outdoor</li>
      <li className="mt-2">Baby's & Toys</li>
      <li className="mt-2">Groceries & Pets</li>
      <li className="mt-2">Health & Beauty</li>
    </ul>
</div>
<div className="flex md:justify-between p-4 bg-black w-11/12 mt-10 md:ml-10 mb-40 lg:-ml-40">

<div className=" text-white sm:text-3xl w-4/12 ml-5 p-4">
<div className="flex gap-4">
<i className="fa-brands fa-apple text-2xl"></i>
<p className="text-sm sm:mt-2">iphone 14 series</p>
</div>
<div className="text-white mt-2">
  <h1 className="sm:text-4xl">
    Upto 10% Off Voucher
  </h1>
  <p className="mt-4 sm:text-xl underline text-white">shop Now</p>
    <i className="fa-sharp fa-light fa-arrow-right text-white"></i>
</div>
</div>
<img src='/images/phone img.jpeg' alt='heero pic' height={200} width={600} className="w-4/12"/>
</div>
</div>

<div className="bg-red-600 w-3 ml-28 rounded h-7">
  <p className="text-red-600 ml-4 text-md">Today's</p>
</div>

<div>
  <h1 className="font-bold text-2xl">
    Flash Sales
  </h1>
<div>
  <p></p>
</div>
</div>
  </>
)}

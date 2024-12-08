import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function Home() {
  return (
  <>
  <div className="flex justify-center  bg-black p-2 text-white">
    <p className="">Summer Sale For All Swim Suits And Express Delivery-off 50%!<span className="ml-4 font-bold">SHOP NOW</span> </p>
    <div className="flex justify-end">
    <select className="bg-black xl:ml-52">
      <option className=" ml-10">English</option>
    </select>
    </div>
  </div>
  <div className="flex justify-between mt-7 border-b gap-28">
    <div className="flex gap-2">
    <div className="lg:hidden sm:ml-6 ml-3 text-2xl flex gap-4 md:text-3xl">
    <DropdownMenu>
  <DropdownMenuTrigger><i className="fa-solid fa-bars"></i></DropdownMenuTrigger>
  <DropdownMenuContent>
  <div className="py-2 px-2">
  <input type="text" placeholder="search here" className="bg-gray-200 w-9/12 sm:w-11/12 mb-10 text-black p-2 border-2 border-gray-500"/>
  </div> 
    <DropdownMenuLabel>My account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Home</DropdownMenuItem>
    <DropdownMenuItem>About</DropdownMenuItem>
    <DropdownMenuItem>Contact</DropdownMenuItem>
    <DropdownMenuItem>sign up</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
<div className="md:-ml-0 lg:mr-0">
<h1 className="xl:ml-20 mb-4 sm:text-xl md:text-2xl sm:font-bold mt-4 lg:mt-0 lg:ml-4">Exclusive</h1>
</div>
</div>
    
    <ul className=" gap-8 text-xl hidden lg:flex mr-4 ">
      <li className="cursor-pointer hover:underline">Home</li>
      <li className="cursor-pointer hover:underline">about</li>
      <li className="cursor-pointer hover:underline">Contact</li>
      <li className="cursor-pointer hover:underline">sign up</li>
    </ul>

<div className="flex sm:gap-4 gap-2 lg:mr-4 md:ml-8 sm:ml-0">
    <div className="p-2 bg-gray-200 hidden md:flex mt-4 lg:mt-2 mb-4">
        <input type="text" placeholder="search here" className="bg-gray-200 text-black outline-none rounded"/>
        <i className="fa-solid fa-magnifying-glass"></i>
</div>   
        
    <div className="sm:mr-28 mr-12 sm:text-2xl sm:space-x-3 space-x-2 gap-2 flex mt-4 lg:mt-2">
    <i className="fa-regular fa-heart"></i>
    <i className="fa-solid fa-cart-shopping"></i>
    </div>
    
  </div>  
    </div>
  </>
)}

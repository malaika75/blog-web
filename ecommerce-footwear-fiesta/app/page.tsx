"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState , useRef } from 'react'




function page() {

  const text = useRef(null)
  const [ishover , setHover] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHover(index)
  }

  const handleMouseLeave = () => {
    setHover(null)
  }


  return (
    <div className='bg-gray300 bg-[rgb(165, 42, 42)] text-center'>
      <div className='text-5xl font-bold pt-20'>SHOE<span className='text-gray-600 text-6xl'>LUXE</span></div>

      <div>
        <Image 
        src="https://i.imgur.com/R1cgufT.png"
        className='lg:w-11/12 lg:h-[400px] mt-20 mx-auto mb-10' height={900} width={900} alt='shoes' unoptimized quality={100} placeholder='empty'></Image>
        
        </div>

    <h1 className='text-center text-4xl font-semibold py-20 bg-gray-500'>Featured products</h1>
    <div className='bg-white h-[400px] py-20'>
      <div className='ml8 mx-auto grid lg:grid-cols-3 grid-cols-2 gap-5 mb-20'>

<div>
<Link href='/products/${product.id}'>
      <Image src={ishover === 1 ? "https://i.imgur.com/2NWJvNR.jpeg" : "https://i.imgur.com/oeY1Ah3.jpeg"}alt='heels' height={500} width={500} className='object-cover shadow-2xl shadow-black rounded border-4 border-black'
       onMouseEnter= {()=> handleMouseEnter(1) } onMouseLeave={handleMouseLeave}></Image></Link>
       <p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:3000</p>
</div>

<div>
      <Image src={ishover === 2 ? "https://i.imgur.com/TuhxPYA.jpeg" : "https://i.imgur.com/WrtkzsW.jpeg"}alt='heels' height={500} width={500} className='object-cover shadow-2xl shadow-black rounded border-4 border-black'
       onMouseEnter= {()=> handleMouseEnter(2) } onMouseLeave={handleMouseLeave}></Image>
       <p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:3000</p>
       
</div>

<div>
<Image src={ishover === 3 ? "https://i.imgur.com/lOZ4Hii.jpeg" : "https://i.imgur.com/Ffyf0jw.jpeg"}alt='heels' height={500} width={500} className='object-cover shadow-2xl shadow-black rounded border-4 border-black'
       onMouseEnter= {()=> handleMouseEnter(3) } onMouseLeave={handleMouseLeave}></Image>
       <p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2500</p>
</div>


<div>
<Image src="https://i.imgur.com/ySwNO1O.jpeg" alt='shoes' height={500} width={500} className='xl:mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs3000</p>
</div>

<div>
<Image src="https://i.imgur.com/F9Q5mvA.jpeg"alt='shoes' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2100</p>
</div>


<div>
<Image src="https://i.imgur.com/k7AcQ7S.jpeg"alt='shoes' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2100</p>
</div>

<div>
<Image src="https://i.imgur.com/XL6C7ar.jpeg"alt='flat' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2000</p>
</div>

<div>
<Image src="https://i.imgur.com/gbnmLtt.jpeg"alt='khussa' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2200</p>
</div>

<div>
<Image src="https://i.imgur.com/7nq7CFr.jpeg" alt='khussa' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2200</p>
</div>


<div>
<Image src="https://i.imgur.com/FZElGkv.jpeg"alt='flat' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2000</p>
</div>

<div>
<Image src="https://stylestryproductionwls47sou4z.cdn.e2enetworks.net/images/products/medium/1fed56060d983976e5c26c56136025c33950edaa.webp"alt='flat' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2000</p>
</div>

<div className='mb-60'>
<Image src="https://i.imgur.com/Y4GmvLA.jpeg" alt='flat' height={500} width={500} className='mt-10 object-cover shadow-2xl shadow-black rounded border-4 border-black'></Image>
<p className='mt-10 text-lg bg-gray-800 text-white mx-3'>Rs:2000</p>
</div>
</div>
    
    
    
 </div>
</div>
    
  )
}

export default page
  
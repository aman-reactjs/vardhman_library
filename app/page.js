"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'



const page = () => {
  const [isOpenNavbar,setIsOpenNavbar]=useState(false)
  const[isRequestDemo,setIsRequestDemo]=useState(false)
  const[showNumber, setShowNumber] = useState(false)
  const image=[
    '/assets/library_pic1.avif',
    '/assets/library_pic2.avif',
    '/assets/library_pic4.avif'
  ];
  
  const[currentIndex,setCurrentIndex]=useState(0)
  // useEffect ek bar hi render hota hai agar hum last me array lagate hai 
  useEffect(()=>{
    // setTimeOut humesha provided time ke baad chalta hai 
     const trigger =setTimeout(() => {
      // ye actual logic jai jo work kar rha hai 
      //isse samajh gye to abhi hi ko samajh gye
      //isme preIndex currentIndex ki mujhuda index ko le rha hai jo ki abhi 0 hai
      setCurrentIndex((preIndex)=>
        preIndex===image.length-1? 0 :preIndex+1
      )
     }, 3000);
     //agar image dubara render hui hai to trigger function delete hoke dubara se banega 
     return()=> clearTimeout(trigger)
  },[currentIndex])

useEffect(()=>{
  if(isRequestDemo){
    document.body.style.overflow="hidden"
  }else{
    document.body.style.overflow="auto"
  }
  return()=>{
    document.body.style.overflow="auto"
  }
},[isRequestDemo])

  return <> 
  <Navbar setIsRequestDemo={setIsRequestDemo} isOpenNavbar={isOpenNavbar} setIsOpenNavbar={setIsOpenNavbar}/>
  <div id='home' className={`${isOpenNavbar?"bg-black blur-[4px]":""} w-full lg:max-w-[1280px] lg:pt-15 grid md:grid lg:flex justify-center items-center lg:mx-auto`}>

    <div className='w-full lg:max-w-7xl p-3 relative '> 
      
      <Image src={image[currentIndex]}  alt='image is not exit'
      width={400}
      height={0}
      className='w-full h-140 object-cover rounded-lg '/>
  <div className=' absolute inset-3 bg-black/50 rounded-lg p-3 '></div>
  
  <div className='absolute inset-3 h-140 bg-linear-to-r from-black/80 via-black-80  to-black-70 rounded-lg grid md:grid lg:flex justify-between'>

  <div className=' w-64 md:w-150 lg:w-80 h-96 bg-yellow-300-50 m-5 md:m-10 lg:m-20 text-white flex flex-col gap-10 my-30 '>
<h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-wide w-[340px] md:w-[700px] ">SHRI VARDHMAN LIBRARY</h1>
<p className='font-bold'>Study Without Distractions
Experience a quiet, comfortable, and premium study space with high-speed WiFi, air conditioning, cold drinking water, clean washrooms, and dedicated relaxation areas.</p>
<div className='relative inline-block'>

<Button variant="Ghost" className='font-bold w-32 border border-white bg-green-700'
onClick={()=>{
     if (window.innerWidth < 768) {
      window.location.href = "tel:+918755331817";
    } else {
      setShowNumber(!showNumber);
    }
}}
> <Phone className='phone-ring' />
<span className='md:hidden'>
Call Now
</span>
<span className='hidden md:block' onClick={()=>setShowNumber(!showNumber)}>
  Show Number
</span>
</Button>
{showNumber && 

<div  className='w-32 h-16 bg-black/50 flex flex-col justify-center items-center text-white font-bold font-mono absolute rounded-lg'>
<p className='flex gap-1'> <Phone height={25} width={15}/> Call Us</p>
  <h1 className=''>8755331817</h1>
  </div> 
}
  </div>
   </div>

{/* Register for one day demo */}
<div className='hidden lg:block'>
<LoginPage/>
</div>
{isRequestDemo && (
  <div className="fixed inset-x-2 bg-black/40 flex justify-center items-center z-[999] lg:hidden backdrop-blur-sm"
  onClick={()=>setIsRequestDemo(false )}
  >
    <LoginPage setIsRequestDemo={setIsRequestDemo}  showNumber={showNumber} setShowNumber={setShowNumber}  />
  </div>
)}

  </div>

  </div>
  </div>
  </>
}

export default page
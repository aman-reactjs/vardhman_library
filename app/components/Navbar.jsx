// 'use client'
// import React, { useEffect, useState } from 'react'
// import { TableOfContents } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'

// const Navbar = ({isOpenNavbar,setIsOpenNavbar,setIsRequestDemo}) => {
//   const[activeItem,setActiveItem]=useState(1);

//   const navLink=[
//     { id : 1, name : "Home", idName :  "home"},
//     {id : 2, name : "About us", idName : 'about'},
//     {  id : 3, name : "Facilities", idName : "facilities"},
//     { id : 4, name : "Membership", idName : "membership"},
//     {id : 5, name : "Gallery", idName : "gallery"},
//     {id : 6, name : "Contact", idName : "contact"}
//   ]
//    // For making Active link in when section scroll;

// useEffect(()=>{
//   let activescroller=()=>{
//     navLink.forEach((link)=>{
//       let section = document.getElementById(link.idName);
//       if(section){
//         let top= section.offsetTop;
//         let height = section.offsetHeight;
//         if(
//           window.scrollY >= top-150 &&
//           window.screenY < top + height - 150
//         ){
//           setActiveItem(link.id)
//         }
//       }
//     })
//   }
//   window.addEventListener("scroll", activescroller);
//   return()=>{
//     window.removeEventListener("scroll",activescroller)
//   }
// })

//   return <>
//   <div
//    className='
// flex w-full px-2 lg:justify-center items-center
// '>
//   <div
//   //  className='w-full h-10  flex  justify-between   items-center py-6'//

//   className='fixed z-100 top-0  w-full
//           w-full 
//  h-10 flex justify-between md:flex  lg:flex md:justify-between lg:justify-around items-center 

//  md:px-2 py-3 lg:py-10 md:py-6//

//  bg-white/90 md:border-none md:rounded-none border border-gray-500 rounded-lg '
//    >
//   <div 
//   className=' w-130 font-semibold text-gray-600 flex lg:justify-start md:gap-2'>
  
//     <a href="">
//       <Image src="/assets/logos/library_logo.png" 
//       alt="" 
//       width={150}
//       height={150}
//       className='relative right-8 hidden lg:block'
//       />
//     </a>
// <span className=' hidden lg:block relative top-7 right-18 font-bold text-2xl leading-none whitespace-nowrap'>SHRI VARDHMAN LIBRARY 
//   <p className='text-[20px] text-yellow-800'>Agra</p>
// </span>


//     {/* <button className=' hidden lg:flex items-center justify-center gap-10 w-36 h-10 bg-gray-300 border-2 rounded-lg border-gray-400'>Request a Demo</button> */}
//   {/* <button className=' hidden lg:flex items-center justify-center gap-10 w-24 h-10 bg-gray-300 border-2 rounded-lg border-gray-400'>Light</button> */}

//   </div>

// <div 
// className='flex justify-center '>
//   <ul 
//   className=' relative flex items-center px-1 justify-between md:justify-between lg:justify-center gap-5  lg:md:gap-10 w-[380px]
//   md:w-[810px]
//   lg:w-[610px] h-10  border-2 rounded-lg border-gray-400 font-semibold text-gray-600 '>
//     <div className='relative right-3 flex justify-start items-center'>

//     <a href="./">
//       <Image src="/assets/logos/library_logo.png" 
//       alt="" 
//       width={60}
//       height={60}
//       className='lg:hidden block'
//       />
//     </a>
//     <span className=' lg:hidden block relative right-3 top-0.5 font-bold text-[7px] md:text-[10px] leading-none whitespace-nowrap'>SHRI VARDHMAN LIBRARY 
//   <p className=' text-[6px] md:text-[8px] text-yellow-800'>Agra</p>
// </span>
//       </div>
    

//    {/* <h1>Logo</h1> */}
//    <ul className='hidden lg:flex gap-9 items-center cursor-pointer'>

//   {navLink.map((link,ind)=>(
//     <li key={ind}
//     onClick={()=>{setActiveItem(link.id)
//       document.getElementById(link.idName)
//       ?.scrollIntoView({
//         behavior : 'smooth'
//       })
//     }}
//     className={activeItem===link.id?"text-yellow-800":"text-black"}
//     >{link.name}</li>
//   ))}
//     </ul>
//   <TableOfContents className='flex lg:hidden'
//   onClick={()=>setIsOpenNavbar(!isOpenNavbar)}/>
//   </ul>
// </div>
//   </div>


//   {isOpenNavbar && (
//     <>
//    <div
//    className='fixed inset-0 bg-black/50 z-5'
//    onClick={()=>setIsOpenNavbar(false)}
//    />
//      <ul className=" fixed top-13 right-0 w-64 h-120 bg-white hover:text-red-600 shadow-lg rounded-lg p-3 flex flex-col gap-3 z-10"
//      >

//    {navLink.map((link,ind)=>{
//      return <>
// <li key={ind}
// onClick={()=>{setActiveItem(link.id)
//   document.getElementById(link.idName)?.scrollIntoView({
//     behavior: "smooth"
//   })
// }}
// className={activeItem===link.id?'text-yellow-800':"black"}
// >{link.name}</li>
//       </>
//    })}

//   <div 
// className='w-52 md:w-56 h-80 font-semibold text-gray-600 flex flex-col justify-end gap-2'>
//   <Button onClick={()=>{
//     setActiveItem("Request a Demo")
//     setIsRequestDemo(true)
//     setIsOpenNavbar(false)
//   }
// } 
//       className={` block lg:hidden p-2 cursor-pointer ${activeItem==="Request a Demo"? " bg-purple-500/30 text-pink-700":""}`}>Request a Demo</Button>
// </div>
//   </ul>
//   </>
//   )}
//   </div>
//   </>
// }

// export default Navbar


'use client'
import React, { useEffect, useState } from 'react'
import { TableOfContents } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Navbar = ({isOpenNavbar,setIsOpenNavbar,setIsRequestDemo}) => {
  const[activeItem,setActiveItem]=useState(1);
  
  const navLink=[
    { id : 1, name : "Home", idName :  "home"},
    {id : 2, name : "About us", idName : 'about'},
    {  id : 3, name : "Facilities", idName : "facilities"},
    { id : 4, name : "Membership", idName : "membership"},
    {id : 5, name : "Gallery", idName : "gallery"},
    {id : 6, name : "Contact", idName : "contact"}
  ]
// For making Active link in when section scroll;

useEffect(()=>{
  let activescroller=()=>{
    navLink.forEach((link)=>{
      let section = document.getElementById(link.idName);
      if(section){
        let top= section.offsetTop;
        let height = section.offsetHeight;
        if(
          window.scrollY >= top-150 &&
          window.screenY < top + height - 150
        ){
          setActiveItem(link.id)
        }
      }
    })
  }
  window.addEventListener("scroll", activescroller);
  return()=>{
    window.removeEventListener("scroll",activescroller)
  }
})
  return <>
    <div className='flex w-full  px-2 my-1 lg:mt-5 items-center lg:justify-center'>
      <div className=' lg:fixed lg:top-0 top-1 z-50 w-full lg:max-w-[1280px]  h-10 lg:h-23 bg-white/90 
      flex justify-between items-center lg:justify-between '>
        <div 
  className='font-semibold text-gray-600 flex lg:justify-start md:gap-2'>

    <a href="">
   <Image src="/assets/logos/library_logo.png" 
      alt="" 
      width={150}
      height={150}
      className='relative right-8 hidden lg:block'
      />
    </a>
<span className=' hidden lg:block relative top-7 right-18 font-bold text-2xl leading-none whitespace-nowrap'>SHRI VARDHMAN LIBRARY 
  <p className='text-[20px] text-yellow-800'>Agra</p>
</span>
</div>
 <div 
className='flex w-full lg:w-[650px]'>
  <ul 
  className=' relative flex items-center px-0 justify-between
  w-full lg-w-[10px] lg:justify-center gap-5  lg:gap-5  h-10 border-2 rounded-lg border-gray-400 font-semibold text-gray-600'>
    <div className='relative right-3 flex justify-start items-center'>

    <a href="./">
      <Image src="/assets/logos/library_logo.png" 
      alt="" 
      width={60}
      height={60}
      className='lg:hidden block'
      />
    </a>
    <span className=' lg:hidden block relative right-3 top-0.5 font-bold text-[7px] md:text-[10px] leading-none whitespace-nowrap'>SHRI VARDHMAN LIBRARY 
  <p className=' text-[6px] md:text-[8px] text-yellow-800'>Agra</p>
</span>
      </div>
    

   {/* <h1>Logo</h1> */}
   <ul className='hidden lg:flex gap-9 items-center cursor-pointer'>

  {navLink.map((link,ind)=>(
    <li key={ind}
    onClick={()=>{setActiveItem(link.id)
      document.getElementById(link.idName)
      ?.scrollIntoView({
        behavior : 'smooth'
      })
    }}
    className={activeItem===link.id?"text-yellow-800":"text-black"}
    >{link.name}</li>
  ))}
    </ul>
  <TableOfContents className='flex lg:hidden'
  onClick={()=>setIsOpenNavbar(!isOpenNavbar)}/>
  </ul>
</div>
      </div>
      
   {isOpenNavbar && (
    <>
   <div
   className='fixed inset-0 bg-black/50 z-5'
   onClick={()=>setIsOpenNavbar(false)}
   />
     <ul className=" fixed top-13 right-0 w-64 h-120 bg-white hover:text-red-600 shadow-lg rounded-lg p-3 flex flex-col gap-3 z-10"
     >

   {navLink.map((link,ind)=>{
     return <>
<li key={ind}
onClick={()=>{setActiveItem(link.id)
  document.getElementById(link.idName)?.scrollIntoView({
    behavior: "smooth"
  })
}}
className={activeItem===link.id?'text-yellow-800':"black"}
>{link.name}</li>
      </>
   })}

  <div 
className='w-52 md:w-56 h-80 font-semibold text-gray-600 flex flex-col justify-end gap-2'>
  <Button onClick={()=>{
    setActiveItem("Request a Demo")
    setIsRequestDemo(true)
    setIsOpenNavbar(false)
  }
} 
      className={` block lg:hidden p-2 cursor-pointer hover:text-pink-600`}>Request for one day Demo</Button>
</div>
  </ul>
  </>
  )}
    </div>
  </>
  
}

export default Navbar
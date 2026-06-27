import React from 'react'
import Image from 'next/image'
import { User } from 'lucide-react'


const About = () => {
  return <>
  <section className=' flex justify-center' id='about'>
<div className='w-full
          max-w-[380px]
          md:max-w-[768px]
          lg:max-w-[1280px]
           flex  lg:justify-center items-center md:py-5 lg:py-0 py-5'>

  <div className=' w-1/6 md:w-1/2 lg:w-1/2 flex flex-col gap-3 md:gap-3 lg:gap-5 lg:p-10 lg:px-5 px-4 md:px-0'>
    <p className='text-red-900 w-20'>ABOUT US -------</p>
    <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold w-96'>Inspiring Minds.
      <p className='text-red-900'>Creating Future.</p>
    </h1>
    ________Books_________
    <p className='w-80 text-sm '>At Shri Vardhman Library, we provide a peaceful, comfortable, and distraction-free environment where students can focus on their goals, enhance their knowledge, and achieve academic success with confidence.
</p>
<div className=' w-96 flex gap-0 md:gap-6 lg:gap-8 '>
  <div className=' grid justify-center items-center'>
  <h1 className='w-25 text-center'>Our Mission</h1>
  <p className='w-30 text-[10px] text-gray-600'>Our mission is to provide quality resources and a supportive environment for learning and growth.
</p>
  </div>
  <div className=' grid justify-center items-center'>
  <h1 className='w-27 text-center'>Our Community</h1>
  <p className='w-30 text-[10px] text-gray-600'>At Shri Vardhman Library, we believe that knowledge grows stronger when shared with the community.</p>
  </div>
  <div className=' grid justify-center items-center'>
  <h1 className='w-25 text-center'>Our Vision</h1>
  <p className='w-30 text-[10px] text-gray-600'>Our vision is to make knowledge accessible to everyone and inspire a culture of lifelong learning.</p>
  </div>  
</div>
<div className=' w-87.5 md:w-96 lg:w-96 p-4 bg-pink-100 rounded-sm flex gap-2 justify-center'>
  <div className=' w-14 lg:w-20 h-5 lg:h-7 bg-red-900 rounded-xl flex justify-center items-center '>
  <User />
  </div>
  <p className='text-[10px] lg:text-[13px]'>Libraries are the quiet powerhouse of education, providing a space where knowledge grows, focus strengthens, and success begins.
    <p className='text-red-900'>-Honey Jain</p>
</p>
</div>
  </div>
  <div className=' relative lg:w-1/2 h-full lg:m-0 flex items-end justify-end '>
  <Image src="/assets/library_pic1.avif" alt="" 
  width={1000}
  height={1000}
  className=' rounded-tl-[200px] md:w-[300px] md:h-[400px] lg:h-[450px] lg:w-[1000px] lg:my-10 md:ml-20 hidden md:block lg:block'
  />
  <div className='absolute -inset-x-10 inset-y-80 w-[95px] h-48 bg-amber-900 text-gray-300 text-[10px] lg:flex justify-center items-center rounded-lg hidden  '> 
    <p className='w-[60px] h-24'>Knowledge is timeless. At our library. we make it accessible to all.</p>
  </div>
  </div>
</div>
  </section>
  </>
}

export default About;
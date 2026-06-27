import Image from 'next/image'
import React from 'react'

function WhyChooseUs() {
  let facili = [
    {
      id : 1,
      title : '📚Affordable',
      dis : "Quality study space at affordable.",
    },
    {
      id : 2,
      title : '🎯Focused study',
      dis : "Stay focused and achieve goals."
    },
    {
      id : 3,
      title : "🔒Safe & Secure Space",
      dis : "Safe, secure, and peaceful environment."
    },
     {
      id : 4,
      title : '🌐High-Speed WiFi',
      dis : "High-speed WiFi for uninterrupted learnin",
    },
    {
      id : 5,
      title : '❄️Comfortable',
      dis : "Comfortable seating for productive study."
    },
    {
      id : 6,
      title : "⏰Flexible Hours",
      dis : "Flexible timings to suit everyone."
    }
  ]
  return <>
  <section className='flex justify-center' id='facilities'>
    <div className='w-full
          max-w-[380px]
          md:max-w-[768px]
          lg:max-w-[1280px]
          flex justify-center items-center
          relative 
          '>
            <Image src={'/assets/chooseUs/chooseBgBlur.png'} alt=''
            width={400}
            height={400}
            className='absolute w-full max-w-8xl h-48 md:h-80 lg:h-96 rounded-lg bottom-15 left-0'
            
            />
            <div className='absolute inset-3 bg-white/90 blur-in-sm'></div>
            <div className='flex justify-center items-center'>

    </div>
    <div className=' relative w-96 md:w-190 lg:w-400 h-96 md:h-150 flex flex-col lg
    justify-center items-center'>
<h1 className="absolute top-6 text-center text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-700 tracking-wide">
  Why Choose Us
</h1>
      <div className='grid grid-cols-3 gap-2 lg:justify-center lg:items-end'>

    {/* <div className=' relative w-36 md:w-64 lg:w-96 h-96 flex flex-col gap-30'> */}

      <div className=' relative w-40 md:w-64 lg:w-96 h-96  flex flex-col justify-center md:justify-start lg:justify-start items-center md:items-center lg:items-center gap-10 md:gap-25 lg:gap-25'>
        
     {facili.filter(item=>item.id<=3)
     .map((item=>(

       <ul key={item.id}>
        <li className='font-extrabold text-[10px] lg:text-[20px] md:text-[20px]'>{item.title}</li>
        <p className='hidden md:block lg:block text-[10px]'>{item.dis}</p>
      </ul>
  )
  ))}


    </div>
     <div className=' md:w-64 md:h-96 lg:w-96 lg:h-96 flex flex-col justify-center md:items-end md:justify-end lg:items-center gap-30'>
      <Image src={'/assets/chooseUs/img1.png'} alt=''
      width={270}
      height={270}  
    />
    </div>


    <div className=' relative w-40 md:w-64 lg:w-96 h-96  flex flex-col justify-center md:justify-start lg:justify-start md:items-center lg:items-center gap-10 md:gap-25 lg:gap-25'>
    {facili.filter(item=>item.id>3)
    .map((item=>(

      <ul key={item.id}>
        <li className='font-extrabold text-[10px] lg:text-[20px] md:text-[20px]'>{item.title}</li>
        <p className='hidden md:block lg:block text-[10px]'>{item.dis}</p>
      </ul>
)
))}
    
    </div>
      </div>

    </div>
      </div>

  </section>
  </>
}

export default WhyChooseUs
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSquareInstagram, faTwitter, faWebAwesome, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  const explore = ['Catalog','Digital Archive', 'E Resources', 'Special Collection', 'Events'];
  const resources = ['Membership','Guidelines', 'Research Tools', 'Floor plan', 'About Us'];
  return <>
  <section className='grid justify-center items-center' id='contact'>
    <div className='w-full
          max-w-[380px]
          md:max-w-[768px]
          lg:max-w-[1280px]
          md:h-115
          p-0
          grid md:flex lg:flex gap-1 justify-center items-center
          relative 
          overflow-hidden
          '>
            <div className='w-96 md:w-80 h-36 md:h-64 flex flex-col justify-center items-center leading-none md:pb-10 lg:pb-10 '>
              <div className='w-40 flex items-center leading-none'>

              <Image src={'/assets/logos/library_logo.png'} alt={''} 
              width={100}
              height={10}
              className='relative right-3 md:right-0'
              />
              <h1 className=' absolute left-44 md:left-20 lg:left-33 font-bold w-10'>
                Vardhman Library
              </h1>
              </div>
              <p className='text-[12px] md:text-[10px] text-gray-600 pb-2'>Preserving knowledge, inspiring minds</p>
              <p className='text-[12px] text-gray-600'>100 feet, road</p>
              <p className='text-[12px] text-gray-600'>Agra,Uttar pradesh</p>
              <p className='text-[10px] text-gray-600'>honeyjain2611@gmail.com | +91 8755331817</p>
            </div>

            <div className='w-96 h-36 flex flex-col'>
              <ul className='flex flex-col justify-center items-center '>
                <h1 className='text-gray-600'>EXPLORE</h1>
                {explore.map((item,ind)=>(
                  <a href="" key={ind}>
                  <li  className='text-[12px] hover:text-blue-700'>{item}</li>
                  </a>
                )
                )}
              </ul>
            </div>


            <div className='w-96 h-36 flex flex-col'>
              <ul className='flex flex-col justify-center items-center'>
                <h1 className='text-gray-600'>RESOUCES</h1>
                {resources.map((item,ind)=>(
                     <a href="" key={ind}>
                  <li  className='text-[12px] hover:text-blue-700'>{item}</li>
                     </a>
                )
                
                )}
              </ul>
            </div>


            <div className='w-96 h-28 flex flex-col  justify-center items-center'>
               <div className='flex gap-2 cursor-pointer'>
                <a href="">

                <FontAwesomeIcon icon={faFacebook} className='w-10 h-10 border p-2 border-black rounded-full hover:bg-blue-600 '/>
                </a>
                <a href="">

                <FontAwesomeIcon icon={faYoutube} className='w-10 h-10 border p-2 border-black rounded-full hover:bg-red-600 '/>
                </a>
                <a href="">
                <FontAwesomeIcon icon={faSquareInstagram}  className='w-10 h-10 border p-2 border-black rounded-full hover:bg-pink-600 '/>
                </a>
                <a href="">
                <FontAwesomeIcon icon={faTwitter}  className='w-10 h-10 border p-2 border-black rounded-full hover:bg-blue-600 '/>
                </a>
                <a href="">
                <FontAwesomeIcon icon={faWebAwesome}  className='w-10 h-10 border p-2 border-black rounded-full hover:bg-purple-700 '/>
                </a>
               </div>
               <h1 className='text-[14px] font-bold md:text-[12px] lg:text-[14px]'>CONNECT WITH OUR LIBRARY</h1>
            </div>

    </div>
            <hr />
    <div className='flex justify-center items-center'>

            <div className='w-96 h-10 flex justify-center items-center'>
              <p className='text-[10px] text-gray-600'>@ 2024 Vardhman Library, All Rights Reserved</p>
            </div>

    </div>
 

  </section>
  </>
}

export default Footer
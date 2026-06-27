import Image from 'next/image'
import React from 'react'

const Membership = () => {
  return (
    <>
      <section className='flex justify-center items-center' id='membership'>
        <div
          className='w-full
          max-w-[380px]
          md:max-w-[768px]
          lg:max-w-[1280px]
          flex justify-center items-center'
        >
          <div className="hover-3d">

            {/* Content */}
            <figure className="max-w-[1280px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/fees/fees_card.jpeg"
                alt=""
                width={1000}
                height={1000}
                className="
    lg:m-5 md:mr-5
    border-4 border-yellow-400/40
    rounded-lg
    transition-all duration-500
    hover:scale-105
    hover:-translate-y-3
    hover:shadow-2xl
    w-full
    md:w-[760px]
    lg:w-[1100px]
    lg:h-[550px]
    h-auto
  
  "
              />
            </figure>
            {/* Required 8 divs */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Membership
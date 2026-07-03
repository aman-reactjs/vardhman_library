"use client";

import Image from "next/image";

const Gallery = () => {
const showImage = [
"/assets/library_real_img/lib_img_2.jpeg",
"/assets/library_real_img/lib_img_1.jpeg",
"/assets/library_real_img/lib_img_3.jpeg",
"/assets/library_real_img/lib_img_6.jpeg",
"/assets/library_real_img/lib_img_7(1).jpeg",
"/assets/library_real_img/lib_img_8(2).jpeg",
"/assets/library_real_img/lib_img_9(3).jpeg",
'/assets/library_real_img/lib_img_10(4).jpeg'
];

return ( 
<section
   id="gallery"
   className="w-full py-20 bg-white flex justify-center"
 > <div className="w-full max-w-7xl px-4">

    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Library Gallery
      </h2>

      <p className="text-gray-500 mt-3">
        Explore our library environment and facilities
      </p>
    </div>

    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-6
      "
    >
      {showImage.map((item, ind) => (
        <div
          key={ind}
          className="
          relative
          overflow-hidden
          rounded-2xl
          shadow-lg
          group
          cursor-pointer
          "
        >
          <Image
            src={item}
            alt={`Library Image ${ind + 1}`}
            width={600}
            height={600}
            className="
            w-full
            h-72
            object-cover
            transition-all
            duration-500
            group-hover:scale-110
            "
          />

          <div
            className="
            absolute
            inset-0
            bg-black/50
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            flex
            items-center
            justify-center
            "
          >
            <h3 className="text-white font-bold text-lg">
              Library View
            </h3>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

);
};

export default Gallery;

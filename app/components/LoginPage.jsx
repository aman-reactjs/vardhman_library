import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { Phone } from 'lucide-react'

const LoginPage = ({setIsRequestDemo, setShowNumber, showNumber}) => {
  const[formData, setFormData]=useState({
    name  : "",
    phone : "",
    date : ""
  })

const formattedDate = new Date(formData.date).toLocaleDateString(
  "en-IN",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
);

  const handleWhatsappData =()=>{
    const message = `
📚 Library Demo Registration

👤 Name: ${formData.name}
📱 Mobile: +91 ${formData.phone}
📅 Date: ${formattedDate}
`;
window.open(
  `https://wa.me/917300717379?text=${encodeURIComponent(message)}`,
  "_blank"
);
  }

  const handleMailData = () => {
  const subject = "Library Demo Registration";

  const body = `
👤 Name: ${formData.name}

📱 Mobile: +91 ${formData.phone}

📅 Date: ${formattedDate}
`;

  window.location.href =
    `mailto:honeyjain2611@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
  
  return <>
  <div className=' w-80 md:w-80  lg:w-96 h-105 m-20 my-20 py-10 bg-white/20 backdrop-blur-md border border-white/10 rounded-xl shadow-xl flex flex-col  gap-10 items-center text-white relative'
  onClick={(e) => e.stopPropagation()}

  >
  <h1 className='font-extrabold '>Register For One Day Demo</h1>

  <input type="text" placeholder='Enter your name' className=' w-64 md:w-72 lg:w-80 px-5 py-2 border border-white rounded-lg' value={formData.name} onChange={(e)=>setFormData({...formData, name : e.target.value})}/>

  <input type="tel" maxLength={10} placeholder='Enter your mobile number' className='w-64 md:w-72 lg:w-80 px-5 py-2 border border-white rounded-lg' value={formData.phone} onChange={(e)=>setFormData({...formData, phone : e.target.value})}/>

  <input type="date" placeholder='Choose Date' className='w-64 md:w-72 lg:w-80 px-5 py-2 border border-white rounded-lg' value={formData.date} onChange={(e)=>setFormData({...formData, date : e.target.value})}/>

  <div className='w-72 h-10 flex justify-around md:justify-between lg:justify-between '>
    <Button variant="ghost" className=' font-extrabold px-6 md:px-10 border border-white' onClick={handleWhatsappData}>Submit</Button>
    
    <Button variant="ghost" className=' font-extrabold px-2 border border-white'
onClick={()=>{
     if (window.innerWidth < 768) {
      window.location.href = "tel:+918755331817";
    } else {
      setShowNumber(!showNumber);
    }
}}
> 

<span className='block px-5 md:px-7' onClick={handleMailData}>
  Mail Us
</span>
</Button>
  </div>
    {/* <Button onClick={()=>setIsRequestDemo(false)} variant="Destructive" '></Button> */}
    <X className='lg:hidden absolute top-2 right-2 font-extrabold hover:bg-red-700' onClick={()=>setIsRequestDemo(false)}/>
</div>
  </>
}

export default LoginPage
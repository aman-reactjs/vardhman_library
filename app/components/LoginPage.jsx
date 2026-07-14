import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { Phone } from 'lucide-react'
import { DayPicker } from "react-day-picker";


const LoginPage = ({setIsRequestDemo, setShowNumber, showNumber}) => {
  const initialValue = {
     name  : "",
    phone : "",
    date : ""
  }
  const[formData, setFormData]=useState(initialValue)


  const [error,setError]=useState("")

const formattedDate = new Date(formData.date).toLocaleDateString(
  "en-IN",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
);
 

// this is for whatsapp one day demo form
  const handleWhatsappData =()=>{
    if (!formData.name || !formData.phone || !formData.date) {
    setError("Please fill all the fields.");
    return;
  }

   if(formData.phone.length!==10){
    setError('Mobile no must be 10 digits')
    return;
  }

  if(formData.name.length<=3){
    setError("Enter your full name")
    return
  }

  setError("");
  

    const message = `
📚 Library Demo Registration

👤 Name: ${formData.name}
📱 Mobile: +91 ${formData.phone}
📅 Date: ${formattedDate}
`;
window.open(
  `https://wa.me/918755331817?text=${encodeURIComponent(message)}`,
  "_blank"
);
setFormData(initialValue);
  }


  // this is for mailing one day demo form
  const handleMailData = () => {
    if (!formData.name || !formData.phone || !formData.date) {
    setError("Please fill all the fields.");
    return;
  }

  if(formData.phone.length!==10){
    setError('Mobile no must be 10 digits')
    return;
  }
 if(formData.name.length<=3){
    setError("Enter your full name")
    return
  }
  setError("");
  

  const subject = "Library Demo Registration";

  const body = `
👤 Name: ${formData.name}

📱 Mobile: +91 ${formData.phone}

📅 Date: ${formattedDate}
`;


  window.location.href =
    `mailto:honeyjain2611@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    setFormData(initialValue)

};

  // const today = new Date().toISOString().split("T")[0];

  return <>
  <div className=' w-96 md:w-80  lg:w-96 h-105 m-10  bg-white/20 backdrop-blur-md border border-white/10 rounded-xl shadow-xl  text-white relative'
  onClick={(e) => e.stopPropagation()}
  >
    {error && (
      <p className="text-red-500 text-bold font-medium text-center">
    {error}
  </p>
)}
    <div className='py-8 flex flex-col  gap-10 items-center'>
  <h1 className='font-extrabold '>Register For One Day Demo</h1>

  <div className='flex justify-center gap-2 items-center'>
<label className='lg:hidden'>Enter Name - </label>
  <input type="text" placeholder='Enter your name' className=' w-44 md:w-44 lg:w-80 px-3 py-2 border border-white rounded-lg' value={formData.name} onChange={(e) =>
  setFormData({
    ...formData,
    name: e.target.value
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s/, "")
    .split(" ")
    .slice(0, 3)
    .join(" "),
  })
}/>
</div>

  <div className='flex justify-center gap-2 items-center'>

<label className='lg:hidden'>Mobile No - </label>
  <input type="tel" maxLength={10} placeholder='Enter your mobile no' className=' w-44 md:w-44 lg:w-80 px-3 py-2 border border-white rounded-lg' value={formData.phone} onChange={(e)=>setFormData({...formData, phone : e.target.value.replace(/[^0-9]/g, "")})}/>
  </div>
  <div className='flex justify-center gap-2 items-center'>
<label className='lg:hidden'>Select Date - </label>
  <input type="date" placeholder='Choose Date' className=' w-44 md:w-44 lg:w-80 px-3 py-2 border border-white rounded-lg' value={formData.date} min={new Date().toISOString().split("T")[0]} onChange={(e)=>setFormData({...formData, date : e.target.value})}/>

  </div>

  <div className='w-72 h-10 flex justify-around md:justify-between lg:justify-between '>
    <Button variant="ghost" className=' font-extrabold px-6 md:px-10 border border-white' onClick={handleWhatsappData}>Submit</Button>
    
    <Button variant="ghost" className=' font-extrabold px-2 border border-white'
> 

<span className='block px-5 md:px-7' onClick={handleMailData}>
  Mail Us
</span>
</Button>
  </div>
    {/* <Button onClick={()=>setIsRequestDemo(false)} variant="Destructive" '></Button> */}
    <X className='lg:hidden absolute top-2 right-2 font-extrabold hover:bg-red-700' onClick={()=>setIsRequestDemo(false)}/>
</div>
  </div>
  </>
}

export default LoginPage
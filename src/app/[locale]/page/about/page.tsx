import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

export default function page() {  
  return (
  
    <div className=''>


      <div className=' w-full h-[500px]  flex'>


        <div className='w-[550px] h-[400px] ml-32'>
        <Image 
    src="/image.png"  
    alt="GFG logo imported from public directory" 
    className=' rounded-full mt-24' 
    width={50}  
    height={10} 
/>
        
        <h5 className=' mt-4'>Hello I'm Lowin </h5>

        </div>
        <div className='w-[550px] h-[400px]'>
          <h5 className=' mt-28'>A website designer in Indonesia</h5>
          <p className='text-gray-700'>Passionate Creating Experience for designer!</p>

          <button className='border  w-32 h-9 rounded-xl  bg-gray-950 mt-7 text-white p-1'>Talk with me </button>
          <button className='border  w-32 h-9 rounded-xl ml-8 p-1'>See my work </button>
        </div>



        <div className=' w-11 h-20 p-14'>
        <FaInstagram  className=' w-12 h-9'/>
        <MdSportsBasketball className=' w-12 h-9 mt-6' />
        <BsTwitterX className=' w-12 h-9 mt-6'/>
        

        </div>

     
        </div>
        
      




      </div>
  

 
  )
}

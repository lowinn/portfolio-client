import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";

export default function page() {
  return (

    <div className=''>
      <div className=' w-full h-[400px] flex'>
        <div className='w-[550px] h-[400px]  ml-40'>
          <Image
            src="/image.png"
            alt="GFG logo imported from public directory"
            className=' rounded-full mt-24'
            width={50}
            height={8}
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
          <FaInstagram className=' w-12 h-9' />
          <MdSportsBasketball className=' w-12 h-9 mt-6' />
          <BsTwitterX className=' w-12 h-9 mt-6' />
        </div>

      </div>

      <div className=' bg-gray-100 w-full h-[900px]'>
        <div className=' flex'>

          <div className=' w-[550px] h-[400px] ml-32'>
            <h6 className=' mt-14'>Work Experience</h6>

            <div className='w-[450px] h-[70px] shadow-md flex mt-8 '>
              <div className='w-[70px] h-[50px]'> <AiFillProduct className=' w-20 h-9' /></div>
              <div className='w-[350px] h-[70px] ml-5'>
                <p className=' text-xl'>Product design at Uber</p>
                <p className='text-gray-600'>january -2022 to January-2024</p>
              </div>
            </div>

            <div className='w-[450px] h-[70px] shadow-md mt-6 flex'>
              <div className='w-[90px] h-[50px]'> <AiFillProduct className=' w-20 h-9' /></div>
              <div className='w-[350px] h-[70px] '>
                <p className=' text-xl'>Product design at Uber</p>
                <p className='text-gray-600'>january -2022 to January-2024</p>
              </div>
            </div>

            <div className='w-[450px] h-[70px] shadow-md mt-6 flex'>
              <div className='w-[90px] h-[50px] '> <AiFillProduct className=' w-20 h-9' /></div>
              <div className='w-[350px] h-[70px]'>
                <p className=' text-xl'>Product design at Uber</p>
                <p className=' text-gray-600'>january -2022 to January-2024</p>
              </div>
            </div>

          </div>
          <div className=' w-[650px] h-[400px] ml-28'>
            <h6 className=' mt-14'>Award & recognition</h6>

            <div className='w-[450px] h-[70px] shadow-md flex mt-8  '>
              <div className='w-[70px] h-[50px]'> <AiFillProduct className=' w-20 h-9' /></div>
              <div className='w-[270px] h-[70px] ml-5'>
                <p className=' text-xl'>Product design at Uber</p>
                <p className='text-gray-600'>january -2022 to January-2024</p>
              </div>

              <div><GiArmoredBoomerang className=' w-9 h-5 ml-6 mt-4' /></div>
            </div>
            <div className='w-[450px] h-[70px] shadow-md mt-6 flex'>
              <div className='w-[90px] h-[50px]'> <AiFillProduct className=' w-20 h-9' /></div>
              <div className='w-[270px] h-[70px] '>
                <p className=' text-xl'>Product design at Uber</p>
                <p className='text-gray-600'>january -2022 to January-2024</p>
              </div>
              <div><GiArmoredBoomerang className=' w-9 h-5 ml-6 mt-4' /></div>
            </div>

            <div className='w-[450px] h-[70px] shadow-md mt-6 flex '>
              <div className='w-[90px] h-[50px] '> <AiFillProduct className=' w-20 h-9' /></div>
              <div className='w-[270px] h-[70px]'>
                <p className=' text-xl'>Product design at Uber</p>
                <p className=' text-gray-600'>january -2022 to January-2024</p>
              </div>
              <div><GiArmoredBoomerang className=' w-9 h-5 ml-6 mt-4' /></div>
            </div>

          </div>

        </div>

        {/* i can help u with */}
        <div className=' w-[1250px] h-16 mt-20 flex justify-between ml-32 '>
          <p className=' font-bold text-xl'> I can Help You With</p>
          <button className='border rounded-lg  w-32 h-9  hover:border-red-600'>See my work</button>
        </div>
        <div className='flex gap-4'>

          <div className='w-[800px] h-[500px]'>
            <div className='  text-xl ml-44'> Full Page Web Design</div>
            <div>
              <Image
                src="/website UI_1.png"
                alt="GFG logo imported from public directory"
                className=' mt-2 ml-44'
                width={500}
                height={600}
              />
            </div>
          </div>

          <div className=' w-[800px] h-[500px]'>
            <div className=' text-gray-500'>There are many websites that can help you depending on <br />
              what u want . You can check my art work here for decide.
            </div>
            <div>
              <Image
                src="/website-ui2.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2'
                width={500}
                height={100}
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import { Input } from 'postcss'
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";


export default function page() {
  return (
    <div>

      <div className='  w-full h-[150px]'>
        <h3 className='ml-[600px]'>Newsroom</h3>
        <p className='ml-[460px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates!</p>
        <p className='ml-[630px]'>Lorem ipsum dolor sit amet.</p>

      </div>

      <div className='  bg-gray-200 w-[1120px] h-[410px] ml-36 flex gap-2 rounded-xl'>
        <div className='w-[500px] h-[320px] p-4 ml-5'>

          <div>
            <p className=' text-gray-400 mt-2'>Insight</p>
          </div>
          <div>
            <p className=' text-2xl mt-6'>Behind our industry leading eccaptance rates
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className=' text-gray-500 mt-3'>
            <p>Lorem ipsum dolor sit amet consectetur,
              Lorem ipsum dolor sit amet.adipisicing elit. dipisci unde incidunt!</p>
          </div>

          <div className=' mt-24 text-gray-400'>
            <p>March 17, 2022</p>
          </div>

        </div>

        <div className='  w-[700px] h-[320px]' >
          <div>
            <Image
              src="/coding girl.jpg"
              alt="GFG logo imported from public directory"
              className=' rounded-xl'
              width={690}
              height={50}
            />

          </div>
        </div>

      </div>

      {/* subcribe */}

      <div className='  w-[1160px] h-[130px] ml-36 flex gap-2 rounded-xl mt-8'>
        <div className=' w-[1000px] p-5'>
          <div>
            <p>Subcribe to newsletter for daily industry insight! </p>
          </div>
          <div className=''>
            <input type="text" placeholder='Enter Your Email ...' className=' rounded-xl p-1 w-[350px] mt-6  border border-black' />
          </div>

        </div>
        <div className='w-[310px] '>
          <div>
            <h4 className=' text-2xl'> Follow Us </h4>
          </div>

          <div>
            <p className=' text-stone-700'>To recieve special offer and promotion!</p>
          </div>

          <div className=' flex gap-2 mt-4'>
            <FaInstagram className='w-[60px] h-[30px]' />
            <RiFacebookCircleLine className='w-[60px] h-[30px]' />
            <CiLinkedin className='w-[60px] h-[30px]' />

          </div>

        </div>

      </div>

      <hr className=' w-[78%]  ml-36 mt-1' />
      <div className=' w-[1150px] h-[1000px] ml-36 mt-5'>
        <div className=' w-[1150px] h-[530px] flex gap-6'>
          <div className=' bg-slate-500 w-[360px] h-[530px]  rounded-xl'>

            <div className=' w-[360px] h-[359px]'>
              <Image
                src="/Team girl.jpg"
                alt="GFG logo imported from public directory"
                className=' rounded-tl-2xl rounded-tr-2xl'
                width={590}
                height={20}
              />

            </div>
            <div className=' bg-gray-400 w-[360px] h-[170px] p-5 rounded-br-xl rounded-bl-xl'>


              <div>
                <p className=' text-sm text-gray-200'> March 17 , 2023</p>
              </div>

              <div>
                <h6 className=' text-lg  text-gray-100'> Role of design in making  <br />user_frindly page </h6>
              </div>
              <div>
                <p className=' text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sunt. Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
          </div>

          <div className=' bg-slate-500 w-[360px] h-[530px]  rounded-xl'>

            <div className=' w-[360px] h-[359px]'>
              <Image
                src="/my girl.jpg"
                alt="GFG logo imported from public directory"
                className=' rounded-tl-2xl rounded-tr-2xl'
                width={590}
                height={20}
              />

            </div>
            <div className=' bg-gray-400 w-[360px] h-[170px] p-5 rounded-br-xl rounded-bl-xl'>

              <div>
                <p className=' text-sm text-gray-200'> March 17 , 2023</p>
              </div>
              <div>
                <h6 className=' text-lg  text-gray-100'> I hurt myself everyday   <br />jsut coz of one person!</h6>
              </div>
              <div>
                <p className=' text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sunt. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

          </div>
          <div className=' bg-slate-500 w-[360px] h-[530px] ml-2 rounded-xl'>

            <div className=' w-[360px] h-[359px]'>
              <Image
                src="/Sad girl.jpg"
                alt="GFG logo imported from public directory"
                className=' rounded-tl-2xl rounded-tr-2xl'
                width={590}
                height={20}
              />

            </div>

            <div className=' bg-gray-400 w-[360px] h-[170px] p-5 rounded-br-xl rounded-bl-xl'>
              <div>
                <p className=' text-sm text-gray-200'> March 17 , 2023</p>
              </div>

              <div>
                <h6 className=' text-lg  text-gray-100'> of cause it hurt u so bad<br /> just let it go..</h6>
              </div>
              <div>
                <p className=' text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sunt. Lorem ipsum dolor sit amet.</p>
              </div>

            </div>

          </div>
        </div>
        <div className=' w-[1150px] h-[530px] mt-7 flex gap-6'>

          <div className=' bg-slate-500 w-[360px] h-[530px]  rounded-xl '>

            <div className=' w-[360px] h-[359px]'>
              <Image
                src="/Team girl.jpg"
                alt="GFG logo imported from public directory"
                className=' rounded-tl-2xl rounded-tr-2xl'
                width={590}
                height={20}
              />

            </div>
            <div className=' bg-gray-400 w-[360px] h-[170px] p-5 rounded-br-xl rounded-bl-xl'>
              <div>
                <p className=' text-sm text-gray-200'> March 17 , 2023</p>
              </div>
              <div>
                <h6 className=' text-lg  text-gray-100'> Find yourself in bad situation  <br /> .don't give up </h6>
              </div>
              <div>
                <p className=' text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sunt. Lorem ipsum dolor sit amet.</p>
              </div>

            </div>
          </div>
          <div className=' bg-slate-500 w-[360px] h-[530px] ml-2 rounded-xl'>

            <div className=' w-[360px] h-[359px]'>
              <Image
                src="/my girl.jpg"
                alt="GFG logo imported from public directory"
                className=' rounded-tl-2xl rounded-tr-2xl'
                width={590}
                height={20}
              />

            </div>
            <div className=' bg-gray-400 w-[360px] h-[170px] p-5 rounded-br-xl rounded-bl-xl'>

              <div>
                <p className=' text-sm text-gray-200'> March 17 , 2023</p>
              </div>

              <div>
                <h6 className=' text-lg  text-gray-100'>not everyone can hurt yourself   <br />its because of urslef </h6>
              </div>
              <div>
                <p className=' text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sunt. Lorem ipsum dolor sit amet.</p>
              </div>

            </div>

          </div>

          <div className=' bg-slate-500 w-[360px] h-[530px] ml-2 rounded-xl'>

            <div className=' w-[360px] h-[359px]'>
              <Image
                src="/Sad girl.jpg"
                alt="GFG logo imported from public directory"
                className=' rounded-tl-2xl rounded-tr-2xl'
                width={590}
                height={20}
              />

            </div>
            <div className=' bg-gray-400 w-[360px] h-[170px] p-5 rounded-br-xl rounded-bl-xl'>
              <div>
                <p className=' text-sm text-gray-200'> March 17 , 2023</p>
              </div>

              <div>
                <h6 className=' text-lg  text-gray-100'> Role of design in making  <br />user_frindly page </h6>
              </div>
              <div>
                <p className=' text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sunt. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className=' bg-white w-full h-[190px]  mt-32'>
        <div className=' h-[190px] w-[350px] ml-[490px]'>
          <div className=' ml-16'>
            <p className=' text-xs text-gray-500 p-3'>Lorem ipsum dolor sit amet.</p>

          </div>
          <div className=' ml-14'>
            <h5 className=' text-2xl font-bold text-gray-700 '>Let Talk With Me!</h5>
          </div>

          <div className=' ml-20 mt-10'>
            <button className=' bg-indigo-500 text-white  w-36 h-9 rounded-xl p-2 hover:bg-violet-400'>Tab to continue</button>
          </div>

          <div className=' ml-[85px]'>
            <p className=' text-xs text-gray-900 p-3'>Lorem ipsum dolor.</p>
          </div>
        </div>

      </div>
      <div className=' bg-gray-200 w-full h-[35px] justify-between flex'>

        <div className=' w-[550px] h-[90px]'>

          <div>
            <ul className='flex gap-6 ml-48 font-bold'>
              <li>welcome </li>
              <li>My page</li>
            </ul>
          </div>
        </div>
        <div className='w-[500px] h-[90px]'>
          <div>
            <ul className='flex gap-6 ml-24'>
              <li>welcome </li>
              <li>My page</li>
              <li>Hello Lowin</li>
              <li>About Us</li>

            </ul>
          </div>
        </div>

      </div>


    </div>
  )
}

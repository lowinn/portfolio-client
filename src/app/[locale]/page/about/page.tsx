import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { TbBrandReact } from "react-icons/tb";
import { HiFilm } from "react-icons/hi";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { GiSoccerBall } from "react-icons/gi";

export default function page() {
  return (

    <div className=''>
      <div className=' w-full h-[300px] flex flex-col lg:flex-row lg:flex-wrap lg:justify-between'>
        <div className='w-full sm:w-[500px] h-[400px] sm:h-[200px] ml-0 sm:ml-10 md:ml-36'>
          <Image
            src="/image.png"
            alt="GFG logo imported from public directory"
            className=' rounded-full mt-24 lg:mt-8'
            width={50}
            height={8}
          />
          <h5 className=' mt-4 lg:mt-5'>Hello I'm Lowin </h5>
        </div>
        <div className='w-full sm:w-[500px] h-[550px] ml-0 sm:h-[200px] '>
          <h5 className=' mt-5 sm:mt-10'>A website designer in Indonesia</h5>
          <p className='text-gray-700'>Passionate Creating Experience for designer!</p>

          <button className='border  w-32 h-9 rounded-xl  bg-gray-950 mt-7 text-white p-1'>Talk with me </button>
          <button className='border  w-32 h-9 rounded-xl ml-8 p-1 md:ml-9'>See my work </button>
        </div>
        <div className=' w-11 h-20 p-14 md:inline-block hidden'>
          <FaInstagram className=' w-12 h-9' />
          <MdSportsBasketball className=' w-12 h-9 mt-6' />
          <BsTwitterX className=' w-12 h-9 mt-6' />
        </div>

      </div>

      <div className='w-full h-[900px] mt-5'>
        <div className='grid grid-cols-2  w-full '>

          <div className='w-[500px] h-[400px]  ml-40'>
            <h6 className=' mt-14 '>Work Experience</h6>

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
          <div className=' w-[500px] h-[400px] ml-6'>
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
        <div className=' w-[1250px] h-16 mt-20 flex justify-between ml-32 '>
          <p className=' font-bold text-xl'> I can Help You With</p>
          <button className='border rounded-lg  w-32 h-9  hover:border-red-600 '>See my work</button>
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
      <div className='w-[1150px] h-[350px] mt-8 ml-36 flex gap-14'>

        <div className='  w-[500px] h-[300px]'>

          <h3 className='text-xl '>Experience with Mobile MCNC of <br /> projects and industries</h3>
          <p className=' mt-3 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore rerum sequi ea soluta totam quod.</p>
          <button className='border  w-32 h-9 rounded-xl p-2 bg-slate-500 mt-6 text-white'>See my work</button>
          <button className='border  w-36 h-9 rounded-xl p-2 ml-36'>Tab to continue</button>

        </div>
        <div className='w-[500px] h-[300px]'>
          <div className='flex gap-1'>
            <div className=' shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[110px] h-[100px] border rounded-lg ml-9'>
              <TbBrandReact className='w-[80px] h-[60px] ml-3 mt-3' />
            </div>
            <div className='  w-[110px] h-[100px] border rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
              <HiFilm className='w-[60px] h-[40px] ml-5 ' />
              <p className=' text-[10px] ml-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className=' w-[110px] h-[100px] border rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
              <MdFormatListBulletedAdd className='w-[70px] h-[60px] ml-4 mt-3' />
            </div>
            <div className=' w-[110px] h-[100px] border rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
              <GiSoccerBall className='w-[60px] h-[40px] ml-5 ' />
              <p className=' text-[10px] ml-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
          <div className='flex gap-1 mt-2'>
            <div className='w-[110px] h-[100px] border rounded-lg ml-9 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
              <TbBrandReact className='w-[80px] h-[60px] ml-3 mt-3' />
            </div>
            <div className='w-[110px] h-[100px] border rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
              <HiFilm className='w-[60px] h-[40px] ml-5 ' />
              <p className=' text-[10px] ml-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className=' w-[110px] h-[100px] border rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
              <MdFormatListBulletedAdd className='w-[70px] h-[60px] ml-4 mt-3' />
            </div>
            <div className='  w-[110px] h-[100px] border rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
              <GiSoccerBall className='w-[60px] h-[40px] ml-5 ' />
              <p className=' text-[10px] ml-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>

        </div>

      </div>
      <div className=' bg-gray-200 w-full h-[1670px]'>
        <h5 className=' text-2xl  font-bold ml-[620px] p-3'>Select work</h5>

        <div className='w-full h-[620px] flex gap-6  mt-8'>

          <div className=' bg-white w-[560px] h-[610px] p-3 rounded-xl ml-32 shadow-xl '>
            <div>
              <Image
                src="/1.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-xl'
                width={530}
                height={290}
              />
            </div>

            <h5 className=' text-2xl font-bold mt-2'>MCNC</h5>

            <h6 className=' text-xl text-gray-600'>The company</h6>

            <p className=' text-gray-400 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quas ipsam facilis doloribus rem reiciendis
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sequi?
            </p> <br />
            <button className='border p-1 rounded-lg w-44 bg-slate-700 text-white'> Select work</button>

          </div>


          <div className=' bg-white w-[560px] h-[610px] p-3 rounded-xl  shadow-xl '>
            <div>
              <Image
                src="/1.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-xl'
                width={530}
                height={290}
              />
            </div>

            <h5 className=' text-2xl font-bold mt-2'>MCNC</h5>

            <h6 className=' text-xl text-gray-600'>The company</h6>

            <p className=' text-gray-400 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quas ipsam facilis doloribus rem reiciendis
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sequi?
            </p> <br />
            <button className='border p-1 rounded-lg w-44 bg-slate-700 text-white'> Select work</button>

          </div>


        </div>

        <div className='w-full h-[620px] flex gap-6  mt-3'>

          <div className=' bg-white w-[560px] h-[610px] p-3 rounded-xl ml-32 shadow-xl '>
            <div>
              <Image
                src="/1.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-xl'
                width={530}
                height={290}
              />
            </div>

            <h5 className=' text-2xl font-bold mt-2'>MCNC</h5>

            <h6 className=' text-xl text-gray-600'>The company</h6>

            <p className=' text-gray-400 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quas ipsam facilis doloribus rem reiciendis
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sequi?
            </p> <br />
            <button className='border p-1 rounded-lg w-44 bg-slate-700 text-white'> Select work</button>

          </div>


          <div className=' bg-white w-[560px] h-[610px] p-3 rounded-xl  shadow-xl '>
            <div>
              <Image
                src="/1.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-xl'
                width={530}
                height={290}
              />
            </div>

            <h5 className=' text-2xl font-bold mt-2'>MCNC</h5>

            <h6 className=' text-xl text-gray-600'>The company</h6>

            <p className=' text-gray-400 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quas ipsam facilis doloribus rem reiciendis
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, sequi?
            </p> <br />
            <button className='border p-1 rounded-lg w-44 bg-slate-700 text-white'> Select work</button>

          </div>


        </div>

        <div className=' mt-8 w-[800px] h-[350px] ml-[330px]'>

          <div className=' flex w-[690px] ml-[50px] gap-5'>

            <div>
              <Image
                src="/website-ui2.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-lg'
                width={110}
                height={110}
              /></div>

            <div>

              <Image
                src="/website-ui2.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-lg'
                width={110}
                height={110}
              />
            </div>

            <div>

              <Image
                src="/website-ui2.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-lg'
                width={140}
                height={120}
              />

            </div>
            <div>
              <Image
                src="/website-ui2.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-lg'
                width={110}
                height={110}
              />
            </div>

            <div>
              <Image
                src="/website-ui2.jpg"
                alt="GFG logo imported from public directory"
                className=' mt-2 rounded-lg'
                width={110}
                height={110}
              />
            </div>


          </div>



          <div className=' mt-6'>

            <p className=' ml-24 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus </p>
            <p className='  ml-32 text-gray-500'>voluptatem harum voluptate excepturi, tenetur veniam, animi </p>
            <p className='  ml-56 text-gray-500'>cupiditate officiis minus eum sit vitae </p>
            <p className='  ml-60 text-gray-500'>  rerum autem aliquid qui ipsa</p>
            <p className=' ml-64 text-gray-500'>Lorem, ipsum dolor sit </p>


          </div>

        </div>

      </div>


      <div className=' bg-white w-full h-[190px]'>
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
      <div className=' bg-gray-200  w-full h-[35px] justify-between flex'>

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

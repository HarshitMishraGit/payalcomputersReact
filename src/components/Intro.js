import React from 'react'
import Mymap from './Mymap';
import { Tooltip } from 'flowbite-react';
function Intro() {
  let source = "https://www.google.com/maps/place/Payal+Computer's/@28.0820046,80.4654375,18.26z/data=!4m5!3m4!1s0x0:0x4d669d372015c178!8m2!3d28.0820659!4d80.4663507";
  return (
      <div className='flex mx-4 p-5 sm:mx-0 justify-center sm:flex-row sm:space-x-28'>
          <img src={process.env.PUBLIC_URL+'img4.png'} className="w-1/2 hidden sm:block" alt=''></img>
          <div class="sm:p-12 flex flex-col items-start w-full">
          <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Introduction</span>
          <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Welcome to <strong>Payal Computers</strong></h2>
          <p class="leading-relaxed mb-8">We are providing the best in class printing material like : <strong>Flex , Banners ,Visiting Cards, Wedding Cards ,Mundan Cards, Posters </strong></p>
        
        <div>
          {/* <Mymap /> */}
          <Tooltip
          content="Visit Payal Computers"
            style="dark"
            placement="right"
  >
              <img src={process.env.PUBLIC_URL + "map.png"} className="w-[70%] h-[50%] cursor-pointer   duration-1000 "onClick={()=>window.open(source,'_blank')} ></img>
              </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Intro
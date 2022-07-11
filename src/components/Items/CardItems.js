import React from 'react'
import { BiRupee } from 'react-icons/bi';
import { Button ,Tooltip} from 'flowbite-react';
function CardItems(props) {
    return (
      <div className=' w-full md:mx-2 mx-5 my-1 px-5 py-4 flex flex-col bg-cyan-100 rounded-lg '>
            <div className='grid grid-cols-10'>
                <div className='w-full h-[120px] overflow-hidden rounded-lg  col-start-1 col-span-2'>
                              
                    <Tooltip
                        className='z-10 w-[30%]'
                                content={<img src={props.image} />}
                                  placement="right"
                                 >
                    <img src={props.image} className=""></img>
                
                     </Tooltip>

                </div>
          <div className='Contents col-start-4 col-span-8'>
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{props.category}</span>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                         {props.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
                    </p>
                    <div className='price '>
                        <BiRupee size={10}></BiRupee><span>{ props.price}</span>
                    </div>
          </div>

            </div>
            <div className='flex flex-row gap-3 justify-end'> <Button  gradientDuoTone='cyanToBlue' >Buy Now</Button>
              <Button size='sm' color='green' outline>Add to Cart</Button></div>
        </div>
      
  )
}

export default CardItems
import React from 'react'
import { Button, Card } from 'flowbite-react'
function ItemCard(props) {
  return (
    <div className="md:w-[30%] w-full" >
    <Card imgSrc={props.image}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{props.price}</span>
             <div className='flex flex-row gap-3'> <Button size='sm' gradientDuoTone='cyanToBlue' >Buy Now</Button>
              <Button size='sm' color='green' outline>Add to Cart</Button></div>
    </Card>
  </div>
  )
}

export default ItemCard
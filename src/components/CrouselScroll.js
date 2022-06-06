import React from 'react'
import { Carousel } from 'flowbite-react';
function CrouselScroll() {
  return (
      <div className='rounded-none '>
          <Carousel className='rounded-none align-bottom' >
  <img className='bg-green-600'
    src={process.env.PUBLIC_URL+"/images/img1.png"}
    alt="..."
  />
  <img
    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
    alt="..."
  />
  <img
    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
    alt="..."
  />
  <img
    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
    alt="..."
  />
  <img
    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
    alt="..."
  />
</Carousel>
    </div>
  )
}

export default CrouselScroll
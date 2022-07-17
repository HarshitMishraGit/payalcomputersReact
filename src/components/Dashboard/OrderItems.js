import React from 'react'

function OrderItems(props) {
  return (
      <div className="bg-purple-700 w-full rounded-lg my-1 text-white p-4" >
         
          <div className='grid md:grid-cols-7 grid-cols-3'>
              <div className='md:col-start-1 col-start-1 text-sm font-serif text-center'>{props.orderId}</div>
              
              <div className='md:col-start-5 col-start-2 text-sm font-serif text-center'>{props.itemName}</div>
              <div className='md:col-start-7 col-start-3 text-sm font-serif text-center'>{props.date}</div>
            </div>
  </div>
  )
}

export default OrderItems
import React from 'react'

function OrderItems(props) {
  return (
      <div className="bg-purple-700 w-full rounded-lg my-1 text-white p-4" >
         
          <div className='grid grid-cols-7'>
              <div className='col-start-1'>{props.orderId}</div>
              
              <div className='col-start-5 text-center'>{props.itemName}</div>
              <div className='col-start-7 text-center'>{props.date}</div>
            </div>
  </div>
  )
}

export default OrderItems
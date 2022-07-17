import React from 'react'

function OrderFilterPrintItem(props) {
  return (
      <div className="bg-purple-700 w-full rounded-lg my-1 text-white p-4" >
         
          <div className='grid grid-cols-11'>
              <div className='col-start-1'>{props.orderId}</div>
              
              <div className='col-start-3 text-center'>{props.customerName}</div>
              <div className='col-start-5 text-center'>{props.itemName}</div>
              <div className='col-start-7 text-center'>{props.customerMobile}</div>
              <div className='col-start-9 text-center'>{props.customerEmail}</div>
              <div className='col-start-11 text-center'>{props.createdAt}</div>
            </div>
  </div>
  )
}

export default OrderFilterPrintItem
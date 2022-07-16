
import React, { useEffect,useState} from 'react'
import { useSelector } from 'react-redux'

import OrderItems from './OrderItems';
const axios = require('axios')
function UserOrders() {
    const [orders, setorders] = useState([]);
    const id = useSelector((store) => store.users.id);
    const data = { id };
    const dataJson = JSON.stringify(data);
   
useEffect(() => {
    axios.post("https://payalcomputers.com/__testingversion1.0.0/__payalComputersBackend/_getItemByUserId.php",dataJson).then((response)=>{
            console.log("This is the orders ", response.data);
            setorders(response.data);
        }).catch(err => console.log(err));
},[])
   
  return (
      <div>
          <div className='md:w-[50%] w-[90%] rounded-lg mx-auto border-2 my-5 bg-gray-50 p-5'>
              <h2 className='text-2xl text-amber-800 font-bold md:mx-5 mt-4'>My Orders :</h2>
              <hr className='border-t-2 border-gray-500 my-2'></hr>
              <div className='grid grid-cols-7 '>
                  <p className='col-start-1 bg-gray-800 text-white text-center rounded-lg'>Order Id</p>
                  <p className='col-start-5 bg-gray-800 text-white text-center rounded-lg'>Item Name</p>
                  <p className='col-start-7 bg-gray-800 text-white text-center rounded-lg'>Date</p>
              </div>
              {orders.map((item, key) => {
                  return <OrderItems key={key} orderId={item.orderId} date={item.createdAt} itemName={ item.itemName} />
              })}
              {orders.length===0 && <h2 className='text-2xl text-gray-400 font-bold md:mx-5 mt-4'>No data Found</h2>}
          </div>
    </div>
  )
}

export default UserOrders
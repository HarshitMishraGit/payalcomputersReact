import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OrderFlex from '../forms/OrderFlex';
import OrderVisitingCard from '../forms/OrderVisitingCard';



function OrderItem() {
  const [selectedItem, setselectedItem] = useState('');
  const selectedItemRef = useRef(null)
  const onChangeHandeler = () => {
    // console.log(selectedItemRef.current.value);
    const selectedItemValue = selectedItemRef.current.value;
    setselectedItem(selectedItemValue);
  }
  return (
  
    
   <div className='w-[90%] sm:w-1/3 flex flex-col justify-center rounded-lg shadow-lg shadow-gray-400  mx-auto my-24 space-y-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-opacity-20 py-16 px-10'>



      <select name='item' ref={selectedItemRef} onChange={ onChangeHandeler}>
        <option value="">Select an Item</option>
        <option value="Flex">Flex</option>
        <option value="Poster">Poster</option>
        <option value="Visiting Card">Visiting Card</option>
        <option value="Wedding Card">Wedding Card</option>
    </select>
      {selectedItem === "Flex"  && <OrderFlex itemName={ selectedItem}  dimension="feet"/>}
      {selectedItem === "Poster" && <OrderFlex itemName={selectedItem} dimension="inches" />}
      {selectedItem !== "Flex" && selectedItem !== "Poster" && selectedItem !== "" && <OrderVisitingCard itemName={ selectedItem} />}
      
</div>
  )
}

export default OrderItem
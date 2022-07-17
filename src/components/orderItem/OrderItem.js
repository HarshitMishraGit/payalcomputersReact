import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderFlex from '../forms/OrderFlex';
import OrderVisitingCard from '../forms/OrderVisitingCard';
import LoginToOrderModal from '../Modal/LoginToOrderModal';



function OrderItem() {
  // checking that the user is login or not for getting access to order
  const name = useSelector((store) => store.users.name);
  const [isLogin, setisLogin] = useState(true);
  const [selectedItem, setselectedItem] = useState('');
  const selectedItemRef = useRef(null)
  const onChangeHandeler = () => {
    // console.log(selectedItemRef.current.value);
    const selectedItemValue = selectedItemRef.current.value;
    setselectedItem(selectedItemValue);
  }
  const onClickHandeler = () => {
    if (name === "") {
      setisLogin(false);
    } else {
      setisLogin(true);
    }
  }
  return (
  
    
   <div className='w-[90%] sm:w-1/3 flex flex-col justify-center rounded-lg shadow-lg shadow-gray-400  mx-auto my-24 space-y-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-opacity-20 py-16 px-10'>

      {!isLogin && <LoginToOrderModal show={!isLogin} dismiss={setisLogin } />}

      <select name='item' ref={selectedItemRef} onChange={onChangeHandeler} onClick={ onClickHandeler}>
        <option value="">Select an Item</option>
       {isLogin && <option value="Flex">Flex</option>}
        {isLogin &&<option value="Poster">Poster</option>}
        {isLogin &&<option value="Visiting Card">Visiting Card</option>}
       { isLogin &&<option value="Wedding Card">Wedding Card</option>}
       { isLogin &&<option value="Mohar">Mohar</option>}
    </select>
      {selectedItem === "Flex"  && <OrderFlex itemName={ selectedItem}  dimension="feet"/>}
      {selectedItem === "Poster" && <OrderFlex itemName={selectedItem} dimension="inches" />}
      {selectedItem !== "Flex" && selectedItem !== "Poster" && selectedItem !== "" && <OrderVisitingCard itemName={ selectedItem} />}
      
</div>
  )
}

export default OrderItem
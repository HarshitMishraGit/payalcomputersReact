import React, { useRef,useState,useEffect} from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios';
// import Loadingcomp from '../Loadingcomp';
import { Spinner } from 'flowbite-react';
import OrderItems from '../Dashboard/OrderItems';
import OrderFilterPrintItem from './OrderFilterPrintItem';
function LoadAllOrdersList() {
   const inputRef = useRef(null);
  const selectRef = useRef(null);
  const [isLoading, setisLoading] = useState(false);
  const [filterData, setfilterData] = useState({})
  const [orders, setorders] = useState([]);
  const [selectedFilterOption, setselectedFilterOption] = useState('');
  const [allowToSearchFilter, setallowToSearchFilter] = useState(false);
  const onChangeHandeler = () => { 
    const selectedFilter=selectRef.current.value;
    setselectedFilterOption(selectRef.current.value)
    if (selectedFilter !== "") {
      setallowToSearchFilter(true);
    } else {
      setallowToSearchFilter(false);
      
    }
  }
  const onSearchHandeler = () => { 
    setisLoading(true);
    // console.log(inputRef.current.value)
    const toSearchValue = inputRef.current.value;
    if (selectedFilterOption === "byDate") {
      setfilterData({ "createdAt": toSearchValue });
      
    } else if (selectedFilterOption === "byOrderId") {
      setfilterData({ "orderId": toSearchValue });
      
    } else if (selectedFilterOption === "byCustomerEmail") {
      setfilterData({ "customerEmail": toSearchValue });
    } 

    
  }
  const dataJson = JSON.stringify(filterData);
  
  const getAllOrders = () => {
    axios.post("https://payalcomputers.com/__testingversion1.0.0/__payalComputersBackend/_getAllOrders.php",dataJson).then((response)=>{
            // console.log("This is the orders ", response.data);
        setisLoading(false);
        // // console.log("Is loading", isLoading);
            setorders(response.data);
        }).catch(err => console.log(err));
    
  }
  useEffect(() => {
    // onSearchHandeler();
    // console.log("This is the json object to send", dataJson);
    getAllOrders(dataJson)
  }, [dataJson]);
  const loader =(
    <div className='flex flex-col justify-center items-center my-2'>
         <p className='text-lg text-orange-400 text-center'>Loading ...</p>
  <Spinner
      className=''
aria-label="Extra large spinner example"
size="lg"
/>
 </div>  

)


  return (
      <div>
      <div className=' w-[90%] rounded-lg mx-auto border-2 my-5 bg-gray-50 p-5'>
        <div className='flex flex-row justify-between'>
           <h2 className='text-2xl text-amber-800 font-bold md:mx-5 mt-4'>All Orders :</h2>
          <div className='grid grid-cols-5 gap-3'>
          <select name='item' ref={selectRef} onChange={ onChangeHandeler} className="col-span-5 col-start-1" >
            <option value="">Filter</option>
            <option value="byDate">By date</option>
            <option value="byOrderId">By Order Id</option>
            <option value="byCustomerEmail">By customer email</option>
          </select>
         {allowToSearchFilter && <input ref={inputRef} className='col-span-4 border-2'></input>}
          {allowToSearchFilter &&  <BiSearchAlt color='green' size={25} onClick={ onSearchHandeler} />}
         </div>
        </div>
              <hr className='border-t-2 border-gray-500 my-2'></hr>
              <div className='grid grid-cols-11 '>
                  <p className='col-start-1 bg-gray-800 text-white text-center rounded-lg'>Order Id</p>
                  <p className='col-start-3 bg-gray-800 text-white text-center rounded-lg'>Customer Name</p>
                  <p className='col-start-5 bg-gray-800 text-white text-center rounded-lg'>Item Name</p>
                  <p className='col-start-7 bg-gray-800 text-white text-center rounded-lg'>Mobile No.</p>
                  <p className='col-start-9 bg-gray-800 text-white text-center rounded-lg'>Customer Email</p>
                  <p className='col-start-11 bg-gray-800 text-white text-center rounded-lg'>Date</p>
              </div>
          {isLoading && loader}
              {orders.map((item, key) => {
                return <OrderFilterPrintItem key={key} orderId={item.orderId}  itemName={item.itemName} customerName={item.customerName} customerMobile={item.customerMobile} customerEmail={item.customerEmail} createdAt={ item.createdAt} />
              })}
              {!isLoading && orders.length===0 && <h2 className='text-2xl text-gray-400 font-bold md:mx-5 mt-4'>No data Found</h2>}
          </div>
    </div>
  )
}

export default LoadAllOrdersList
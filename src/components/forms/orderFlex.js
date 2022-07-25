import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from "yup";

import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import SuccessAlertComp from '../Alert/SuccessAlertComp';
import WarningAlertcomp from '../Alert/WarningAlertcomp';
import ItemBluePrint from '../orderItem/ItemBluePrint'
import ShowOrderNoModal from '../orderItem/ShowOrderNoModal';
import Loadingcomp from '../Loadingcomp';
function OrderFlex(props) {
    const navigate = useNavigate();
    const userId = useSelector((store) => store.users.id);
    const userMobile = useSelector((store) => store.users.mobile);
    const userEmail = useSelector((store) => store.users.email);
    const userName = useSelector((store) => store.users.name);
    const reader = new FileReader();
    const fileref = useRef(null)
    const [filename, setfilename] = useState(null);
    const [showFlexDimensionFields, setshowFlexDimensionFields] = useState(false);
    const [width, setwidth] = useState(0);
    const [height, setheight] = useState(0);
    const [dimension, setdimension] = useState('');
    const [addedItem, setaddedItem] = useState(false);
  const [notAddedItem, setnotAddedItem] = useState(false);
  const [allowToSubmit, setallowToSubmit] = useState(false);
  const [bigImage, setbigImage] = useState(false);
  const [FileErrorMsg, setFileErrorMsg] = useState('')
  const [image, setimage] = useState('');
//  ============= to show the confirmation ==========================
  const [showConfirmationModal, setshowConfirmationModal] = useState(false);
  const [orderId, setorderId] = useState('');
  const [isLoading, setisLoading] = useState(false);
    const fileHandeler = (e) => {
        // setfilevalue(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        reader.onload = async () => { 
            setimage(reader.result);
        }
      setfilename(e.target.files[0].name)
      let size = e.target.files[0].size;
      // console.log("The size of the file is ", size)
      // console.log("The info of the file is ", e.target.files[0])
      const type = e.target.files[0].type;
      // checking the file type 
      if (type === "image/jpeg" || type === "image/png" || type === "image/jpg") { 
        setbigImage(false);
        if (size > 0 && size < 5000000)
        {
          setbigImage(false);
          setallowToSubmit(prevstate => !prevstate);
        } else{
          setbigImage(true);
          setFileErrorMsg("Image Should Be less than 5MB");
          setallowToSubmit(false);
        }
        
      } else {
        setbigImage(true);
        setallowToSubmit(false);
        setFileErrorMsg("Image Should Be Jpeg/png format");
      }
     
    }
    const initialValues = {
        description:'',
        width:0,
        height:0
          
    };
    const validationSchema = Yup.object().shape({
        description: Yup.string().required("Description is required"),
        width: Yup.number().positive().required("please give the width "),
        height:Yup.number().positive().required("please give the height "),
      
    });
    const UploadImageHandeler = () => {
        fileref.current.click()
    };


    // Onsubmit

    const onSubmit = (data) => {
        data.image = image;
        data.id = userId;
        data.item = props.itemName;
        data.mobile=userMobile;
        data.email = userEmail;
        data.name = userName;
        setisLoading(true);
 // ============>>>>>>>> It is very important to provide responseType so that we can convert the file to original form===================//
    axios.post("https://payalcomputers.com/__testingversion1.0.0/__payalComputersBackend/_aNewOrderReceived.php", data).then((res) => {
                        // console.log("This is url ", url)
                        // setimage(url)
      // console.log("This is the respose recieve from server : ", res.data)
      setisLoading(false);
      setorderId(res.data.orderId);
      setshowConfirmationModal(true)
        }).catch(err => {
            console.log(err)
        })
                                            
      // console.log(data)
      
      
      

        
    };
  return (
    <div>
      { isLoading && <Loadingcomp/>}
      {showConfirmationModal && <ShowOrderNoModal orderId={orderId} show={ true} />}
    {addedItem && <SuccessAlertComp dismiss={setaddedItem} exclamation="Admin " message="You have successfully Added the item" />}
    {notAddedItem && <WarningAlertcomp dismiss={setnotAddedItem} exclamation="Admin" message="Somethin went wrong"/>}
         <Formik initialValues={initialValues}   validationSchema={validationSchema} onSubmit={onSubmit} >
<Form className='space-y-4'>
 
   
  
   
   <Field as="textarea" id="description" className="block p-2.5 w-full text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none placeholder:text-gray-200" placeholder="Enter something..." name="description" />
   <ErrorMessage className="text-orange-300 text-xs" name="description" component="span"/>
  
                  
   <input hidden type="file" id="" className=" focus:outline-none focus:ring-offset-0 text-black placeholder-gray-700 text-sm rounded-lg  w-full p-2.5 bg-gray-100" placeholder="" name='pic' ref={fileref}    onChange={fileHandeler} />
                     
                    <div>
                        <p className='text-sm text-gray-200 my-2'>Please Give the Dimesion of the item : </p>
                        <div className='flex flex-row  gap-2'> 
    <Field type="number" id="price" className="block p-2.5 w-1/2 text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-gray-200" placeholder={`width | चौड़ाई  ${dimension}`}  name="width"  validate={(value)=>setwidth(value)} />
    
    <Field type="number" id="price" className="block p-2.5 w-1/2 text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-gray-200" placeholder={`height | ऊंचाई ${dimension}`} name="height"  validate={(value)=>setheight(value)} />
        </div> 
        <div className='flex flex-row justify-between'>
        <ErrorMessage className="text-orange-300 text-xs" name="width" component="span"/> <br></br>
<ErrorMessage className="text-orange-300 text-xs" name="height" component="span"/>
        </div>
                <ItemBluePrint width={width} height={height} itemName={props.itemName} dimension={ props.dimension} />
    </div>
          
          
  
                      
 

  
               <p className='text-sm text-gray-200'>Please upload the format below and attach as image | कृपया नीचे प्रारूप अपलोड करें और फ़ोटो के रूप में संलग्न करें </p>
                      <div className='flex flex-row gap-3'>
                      <button
             className="bg-transparent backdrop-blur-xl rounded-lg text-white  font-bold uppercase text-sm px-6 py-2  shadow hover:shadow-lg  hover:shadow-black outline-none mr-1 mb-1 ease-linear transition-all duration-150 focus:ring-2 focus:shadow-md focus:shadow-gray-600 focus:ring-gray-200"
             type="button" onClick={UploadImageHandeler}
           >
            Upload Image
           </button>      
           <button disabled={!allowToSubmit}
             className={`${allowToSubmit?"bg-transparent backdrop-blur-xl hover:shadow-black focus:ring-2 focus:ring-gray-200 focus:shadow-md focus:shadow-gray-600":"bg-gray-400"} rounded-lg text-white active:bg-gradient-to-r-from-indigo-200-via-purple-200-to-pink-200  font-bold uppercase text-sm px-6 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 `}
             type="submit" 
           >
             Order Now
               </button>
          </div>
        
               {filename && <p className='text-sm -mt-10 font-bold text-yellow-200'>Selected File :<span className='text-gray-50'> {filename}</span> </p>}
               {bigImage && <span  className="text-red-400 text-xs font-bold" >{FileErrorMsg}</span> }

              {filename &&  <img src={image} className="my-2 shadow-lg shadow-gray-500"></img>}
               
</Form>
</Formik>
 
    </div>
  )
}

export default OrderFlex
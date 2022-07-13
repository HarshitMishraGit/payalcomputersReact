import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from "yup";


import { Formik, Form, Field, ErrorMessage } from "formik";
import SuccessAlertComp from '../Alert/SuccessAlertComp';
import WarningAlertcomp from '../Alert/WarningAlertcomp';
import ItemBluePrint from './ItemBluePrint';

function OrderItem() {
    const navigate = useNavigate();
    const reader = new FileReader();
    const fileref = useRef(null)
    const [filename, setfilename] = useState(null);
    const [showFileError, setshowFileError] = useState(true);
    const [showFlexDimensionFields, setshowFlexDimensionFields] = useState(false);
    const [selectedItem, setselectedItem] = useState('');
    const [width, setwidth] = useState(0);
    const [height, setheight] = useState(0);
    const [dimension, setdimension] = useState('');
    const [addedItem, setaddedItem] = useState(false);
    const [notAddedItem, setnotAddedItem] = useState(false);
    const fileHandeler = (e) => {
        // setfilevalue(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        reader.onload = async () => { 
            setimage(reader.result);
            setshowFileError(false);
        }
        setfilename(e.target.files[0].name)
      let size = e.target.files[0].size
      console.log("The size of the file is ",size)
    }
      const initialValues = {
        itemName: "",
        width:0,
        height:0,
        pic:""
          
    };
    const validationSchema = Yup.object().shape({
        itemName: Yup.string().required("Please Select a item | कृपया एक आइटम चुनें"),
        description: Yup.string().required("Description is required"),
        width: Yup.number().positive().required("please give the width "),
        height:Yup.number().positive().required("please give the height "),
        // pic:Yup.string().required("Please select an Image")
      
    });
    const UploadImageHandeler = () => {
      fileref.current.click()
    }
// Cheking for the selected item to show the length bars
    const itemValidation = (value) => {
        if (value === 'flex') {
            setshowFlexDimensionFields(true);
            setselectedItem('flex')
            setdimension(prevstate=> 'feet')
        } else if (value === 'poster') {
            setshowFlexDimensionFields(true);
            setselectedItem('Poster')
            setdimension(prevstate=> 'inches')
            
        } else {
            setshowFlexDimensionFields(false);
            
        }
}
// Cheking for the selected item to show the length bars
    
    const [image, setimage] = useState('');
    const onSubmit = (data) => {
        data.pic = image;
     
 // ============>>>>>>>> It is very important to provide responseType so that we can convert the file to original form===================//
    // axios.post("http://localhost/__payalComputersBackend/_additem.php", data).then((res) => {
    //                     // console.log("This is url ", url)
    //                     // setimage(url)
    //     console.log("This is the respose recieve from server : ", res)
    //     if (res.data.message === "ok") {
    //         setaddedItem(true);
    //         setTimeout(() => {
    //             navigate('/store')
    //         }, 2000);
          
    //     } else if (res.data.message === "error") {
    //         setnotAddedItem(true);
    //     }
    //                 }).catch(err => {
    //                     console.log(err)
    //                 })
                                                        
      console.log(data)
      
      
      

        
    };
  return (
    <div >
    {addedItem && <SuccessAlertComp dismiss={setaddedItem} exclamation="Admin " message="You have successfully Added the item" />}
    {notAddedItem && <WarningAlertcomp dismiss={setnotAddedItem} exclamation="Admin" message="Somethin went wrong"/>}
   <div className='w-[90%] sm:w-1/3 flex flex-col justify-center rounded-lg shadow-lg shadow-gray-400  mx-auto my-24 space-y-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-opacity-20 py-16 px-10'>
<Formik initialValues={initialValues}   validationSchema={validationSchema} onSubmit={onSubmit} >
<Form className='space-y-4'>
 
   
    < Field as="select" name="itemName" className="bg-transparent border-2 border-gray-200 px-2 py-1 text-white rounded-lg focus:outline-none" validate={itemValidation} >
             <option value="" className="text-gray-900">Select Item </option>
             <option value="flex" className="text-gray-900">flex</option>
             <option value="visiting card" className="text-gray-900">visiting card</option>
             <option value="poster" className="text-gray-900">poster</option>
             <option value="wedding card" className="text-gray-900">wedding card</option>image.png
           </Field>
               
               <ErrorMessage className="text-orange-300 text-xs" name="itemName" component="span"/>
  
   
   <Field as="textarea" id="description" className="block p-2.5 w-full text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none placeholder:text-gray-200" placeholder="Enter something..." name="description" />
   <ErrorMessage className="text-orange-300 text-xs" name="description" component="span"/>
  
                  
   <input hidden type="file" id="" className=" focus:outline-none focus:ring-offset-0 text-black placeholder-gray-700 text-sm rounded-lg  w-full p-2.5 bg-gray-100" placeholder="" name='pic' ref={fileref}    onChange={fileHandeler} />
  {/* Only for flex and poster  */}
                      {showFlexDimensionFields && 
                          <div>
                              <p className='text-sm text-gray-200 my-2'>Please Give the Dimesion of the item : </p>
                              <div className='flex flex-row  gap-2'> 
            <Field type="number" id="price" className="block p-2.5 w-1/2 text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-gray-200" placeholder={`width | चौड़ाई  ${dimension}`}  name="width"  validate={(value)=>setwidth(value)} />
            
            <Field type="number" id="price" className="block p-2.5 w-1/2 text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-gray-200" placeholder={`height | ऊंचाई ${dimension}`} name="height"  validate={(value)=>setheight(value)} />
                              </div> 
                              <ItemBluePrint width={width} height={height} itemName={selectedItem} dimension={ dimension} />
          </div>
          
          
          }  
                      
  {/* Only for flex and poster  */}

   <ErrorMessage className="text-orange-300 text-xs" name="width" component="span"/> <br></br>
   <ErrorMessage className="text-orange-300 text-xs" name="height" component="span"/>
               <p className='text-sm text-gray-200'>Please upload the format below and attach as image | कृपया नीचे प्रारूप अपलोड करें और फ़ोटो के रूप में संलग्न करें </p>
                      <div className='flex flex-row gap-3'>
                      <button
             className="bg-transparent backdrop-blur-xl rounded-lg text-white  font-bold uppercase text-sm px-6 py-2  shadow hover:shadow-lg  hover:shadow-black outline-none mr-1 mb-1 ease-linear transition-all duration-150 focus:ring-2 focus:shadow-md focus:shadow-gray-600 focus:ring-gray-200"
             type="button" onClick={UploadImageHandeler}
           >
            Upload Image
           </button>      
           <button
             className="bg-transparent backdrop-blur-xl rounded-lg text-white active:bg-gradient-to-r-from-indigo-200-via-purple-200-to-pink-200  font-bold uppercase text-sm px-6 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:shadow-black focus:ring-2 focus:ring-gray-200 focus:shadow-md focus:shadow-gray-600"
             type="submit" 
           >
             Save Changes
               </button>
            </div>
               {filename && <p className='text-sm -mt-10 font-bold text-yellow-200'>Selected File :<span className='text-gray-50'> {filename}</span> </p>}
             {showFileError &&  <ErrorMessage className="text-orange-300 text-xs" name="pic" component="span"/>}

              {filename &&  <img src={image} className="my-2 shadow-lg shadow-gray-500"></img>}
               
</Form>
</Formik>



</div></div>
  )
}

export default OrderItem
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { sha256 } from 'js-sha256';
import * as Yup from "yup";
const axios = require('axios')
// const { createHash } = require('crypto');
function ConfirmSignUp(props) {
    const userData = props.userData;
    const navigate = useNavigate();
    const [checkOtp, setcheckOtp] = useState('');
    const [wrongOtp, setwrongOtp] = useState(false)
    // const [timerClock, settimerClock] = useState(20);
    // let timerClock = 20;
    // if (props.otp !== "") {
    //     props.setresend(false);
    //     const timerClockId=setInterval(() => {
    //         // settimerClock(prevstate => prevstate - 1);
    //         timerClock = timerClock -1;
    //         console.log(timerClock);
    //     }, 1000);
    //     setTimeout(() => {
    //         clearInterval(timerClockId);
    //         props.setresend(true);
            
    //     }, 20000);
    // }
    const initialValues = {
        otp:"",
       };
      
        const validationSchema = Yup.object().shape({
            otp: Yup.string().required("otp is required"),
        });
    //console.log("This is the user data in the confirmsignup comp",userData)
    //console.log("This is the otp in the confirmsignup comp", props.otp);
 
    // const onClickHandeler = () => {
    //     // props.resend(userData);
    //     setallowToSubmit(false);
   
    // }
    const onSubmit = (data) => {
        const hexotp = sha256(data.otp);
        props.setisLoading(true);
        // //console.log("This is in the confirm signup comp", data)
        //console.log("This is the hashed password", hexotp);
        if (hexotp === props.otp) {
            
        axios.post("https://payalcomputers.com/__testingversion1.0.0/__payalComputersBackend/_signUp.php", userData).then((response)=>{
          // console.log(response);
          props.setisLoading(false)
          let message = response.data.message;
          if (message === "userExist") {
              props.setisregistered(true)
              // console.log("alreadyregister is runned")
            } else if(message==="ok") {
              props.setregistrationsuccess(true);
            setwrongOtp(false);
              
                // console.log("registration successfull is runned")
            }
            
        });
         } else {
            props.setisLoading(false)
            props.setwrongOtp(true);
            setwrongOtp(true);
        }
    }
         
  return (
      <div className='my-3'>
          {props.otp!=="" && <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          
          <Form>
          <div className="mb-6">
          <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter The OTP</label>
                      <Field type="text" id="otp" name="otp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XXXXX" required />
                      <ErrorMessage className="text-orange-700 text-xs" name="otp" component="span"/>
                      {wrongOtp && <p  className="text-orange-700 text-xs">Wrong Otp</p>}
          </div>
          
                        

                  
                  <button type="submit" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 col-start-1 col-span-2`}>Submit</button>
                 
            
                      {/* <p className='col-start-3 col-span-2 text-orange-400 text-sm'>Resend in {timerClock }s</p> */}
                
          </Form>
          </Formik>}
    </div>
  )
}

export default ConfirmSignUp
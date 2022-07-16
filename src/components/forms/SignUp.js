import React, { Fragment,useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone";
import WarningAlertcomp from '../Alert/WarningAlertcomp';
import SuccessAlertComp from '../Alert/SuccessAlertComp';
import Loadingcomp from '../Loadingcomp';
const axios = require('axios')
function SignUp() {
  const [isLoading, setisLoading] = useState(false);
  const [isregistered, setisregistered] = useState(false);
  const [registrationsuccess, setregistrationsuccess] = useState(false);
    const initialValues = {
        name:"",
        email:"",
        password:"",
        mobile:"",
        confirmPassword:""
       
        };
      
        const validationSchema = Yup.object().shape({
            name: Yup.string().required("name is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required"),
            mobile: Yup.string().phone("IN").required("Password is required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),

          
          
        });
 
  const onSubmit = (data) => {
    setisLoading(true);
        console.log("This is the recived data : " , data)
        axios.post("https://payalcomputers.com/__testingversion1.0.0/__payalComputersBackend/_signUp.php", data).then((response) => {
          console.log(response);
          setisLoading(false)
            let message = response.data.message;
          if (message === "userExist") {
            setisregistered(true)
            console.log("alreadyregister is runned")
          } else if(message==="ok") {
            setregistrationsuccess(true)
            console.log("registration successfull is runned")
            }
        
        });
 
      };
    return (
      <Fragment>
           {isLoading && <Loadingcomp/>}
        {registrationsuccess && <SuccessAlertComp dismiss={setregistrationsuccess} exclamation="Hey user" message="You are successfully registered"/>}
        {isregistered && <WarningAlertcomp dismiss={setisregistered} exclamation="Hey user" message="You are already registered" />}
      
        <div className='w-3/5 mx-auto my-10 bg-gray-200 px-7 py-3 rounded-lg'>
     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          
<Form>
<div className="mb-6">
<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Full Name</label>
            <Field type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
            <ErrorMessage className="text-orange-700 text-xs" name="name" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <Field type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required />
            <ErrorMessage className="text-orange-700 text-xs" name="email" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
            <Field type="text" id="mobile" name="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="91XXXXXX" required />
            <ErrorMessage className="text-orange-700 text-xs" name="mobile" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <Field type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <ErrorMessage className="text-orange-700 text-xs" name="password" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <ErrorMessage className="text-orange-700 text-xs" name="confirmPassword" component="span"/>
            
</div>

<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</Form>
</Formik>
    </div>
            </Fragment>
  )
}

export default SignUp
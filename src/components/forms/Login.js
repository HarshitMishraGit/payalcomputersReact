import React, { Fragment,useState,useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import * as jose from 'jose';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import "yup-phone";
import SuccessAlertComp from '../Alert/SuccessAlertComp';
import WarningAlertcomp from '../Alert/WarningAlertcomp';
import { setname , setemail, setid, setlogin, setmobile, setrole } from '../../store/userStore';
import Loadingcomp from '../Loadingcomp';

const axios = require('axios')
function Login() {
    const name = useSelector((store) => store.users.name);
    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Login, setLogin] = useState(false);
    const [NotRegistered, setNotRegistered] = useState(false);
    const initialValues = {
        email: "",
        password: "",
     
       
        };
      
        const validationSchema = Yup.object().shape({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().required("Password is required"),

          
          
        });
 
    const onSubmit = (data) => {
        // console.log("This is the recived data : ", data)
        setisLoading(true);
        axios.post("https://payalcomputers.com/__testingversion1.0.0/__payalComputersBackend/_login.php", data).then((response) => {
            // console.log(response);
            setisLoading(false)

            const message = response.data.message;
            const newname = response.data.name;
            if (message == "ok") {
                const jwt = response.data.jwt;
                setLogin(true);
                // setting jwt token in the localstorage
                localStorage.setItem('token', jwt)

//==================>>>>>>>>>>>>>> to display immidiate action on the login page
                const decodedJwt = jose.decodeJwt(jwt)
                const userDataRecieve = decodedJwt.data;
                setTimeout(() => {
                    dispatch(setlogin(true));
                    dispatch(setname(userDataRecieve.name));
                    dispatch(setid(userDataRecieve.id));
                    dispatch(setemail(userDataRecieve.email));
                    dispatch(setmobile(userDataRecieve.mobile));
                    dispatch(setrole(userDataRecieve.role));
                    navigate('/');
                }, 1000);
            }
            else {
                setNotRegistered(true)

                // dispatch(setname("newName"))

            }
            
        });
      };
    return (
        <Fragment>
            {isLoading && <Loadingcomp/>}
            {Login && <SuccessAlertComp dismiss={setLogin} exclamation="Hey User " message="You have successfully Logged IN" />}
            {NotRegistered && <WarningAlertcomp dismiss={setNotRegistered} exclamation="Hey User" message="Invalid Cridentials"/>}
    <div className='w-full md:w-1/3 mx-auto my-10 bg-gray-200 px-7 py-3 rounded-lg'>
     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          
<Form>
<div className="mb-6">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <Field type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
            <ErrorMessage className="text-orange-800 text-xs" name="email" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <Field type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <ErrorMessage className="text-orange-800 text-xs" name="password" component="span"/>
            
</div>

<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</Form>
</Formik>
    </div>
            </Fragment>
  )
}

export default Login
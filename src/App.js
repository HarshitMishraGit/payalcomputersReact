import Footercomp from "./components/Footercomp";
import { useEffect } from "react";
import Home from "./components/Home";
import Navbarcomp from "./components/Navbarcomp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainAuth from "./components/forms/MainAuth";
import NotFound from "./components/NotFound";
import UserData from './store/userStore';
// import axios from 'axios';
// import { useEffect, useState } from "react";
import UserDataComp from "./components/UserDataComp";
import Dashboardcomp from "./components/Dashboard/Dashboardcomp";
// // import AllItemsInStore from "./components/Items/AllItemsInStore";
// import Additems from "./components/Admin/Additems";
import OrderItem from "./components/orderItem/OrderItem";
import { Fragment } from "react";
import ShowOrderNoModal from "./components/orderItem/ShowOrderNoModal";
import UserOrders from "./components/Dashboard/UserOrders";
import LoadAllOrdersList from "./components/Admin/LoadAllOrdersList";
import { useSelector, useDispatch } from 'react-redux/es/exports';
function App() {
  const role = useSelector((store) => store.users.role);
  const islogin = useSelector((store) => store.users.login);
  // for adding dark Mode
  // function hhh(){
  //   if (localStorage.theme === 'dark') {
  //   document.documentElement.classList.add('dark')
  //   } else {
  //   document.documentElement.classList.remove('dark')
  //   } 
  //   }

  // hhh();
  
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      if (!('theme' in localStorage)) {
        localStorage.theme = 'dark';
      }
    
    } else {
      document.documentElement.classList.remove('dark');
      // if no theme key is present set default to light mode
      localStorage.theme = "light";
     
    } 
  }, [])
   
  // for adding dark Mode
  return (
      <Fragment >
      {/* // <Router basename={"/"}> */}
      <Navbarcomp />
        <Routes>
          <Route path="/" element={<Home/>} />
        {!islogin &&  <Route path="/Auth" element={<MainAuth/>} />}
          <Route path="/user" element={<UserDataComp/>} />
        <Route path="/dashboard" element={<Dashboardcomp />} />
        <Route path="/orderNow" element={<OrderItem />} />
        <Route path="/myorders" element={<UserOrders/>} />
       {role==="admin"&& <Route path="/loadallorders" element={<LoadAllOrdersList/>} />}
       
        
          <Route path="*" element={<NotFound/>} />

          

        </Routes>
        <Footercomp />
        {/* // </Router> */}
        </Fragment>
  );
}

export default App;

import Footercomp from "./components/Footercomp";
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


function App() {

  return (
      <Fragment>
      {/* // <Router basename={"/"}> */}
      <Navbarcomp />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Auth" element={<MainAuth/>} />
          <Route path="/user" element={<UserDataComp/>} />
        <Route path="/dashboard" element={<Dashboardcomp />} />
        <Route path="/orderNow" element={<OrderItem />} />
        <Route path="/myorders" element={<UserOrders/>} />
        <Route path="/env" element={<LoadAllOrdersList/>} />
       
        
          <Route path="*" element={<NotFound/>} />

          

        </Routes>
        <Footercomp />
        {/* // </Router> */}
        </Fragment>
  );
}

export default App;

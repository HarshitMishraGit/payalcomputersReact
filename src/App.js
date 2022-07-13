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
import Additems from "./components/Admin/Additems";
import AllItemsInStore from "./components/Items/AllItemsInStore";
import OrderItem from "./components/orderItem/OrderItem";


function App() {

  return (
      
      <Router>
      <Navbarcomp />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Auth" element={<MainAuth/>} />
          <Route path="/user" element={<UserDataComp/>} />
        <Route path="/dashboard" element={<Dashboardcomp />} />
        {/* <Route path="/additems" element={<Additems />} /> */}
        {/* <Route path="/store" element={<AllItemsInStore />} /> */}
        <Route path="/orderNow" element={<OrderItem />} />
        
          <Route path="*" element={<NotFound/>} />

          

        </Routes>
          <Footercomp/>
        </Router>
      //  </UserData.Provider>
  );
}

export default App;

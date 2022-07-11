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


function App() {
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost/__payalComputersBackend/_userdata.php").then((response) => {
  //     // console.log(response);
  //       const message = response.data.message;
  //       if (message == "ok") {
  //         setdata(response.data);
  //         console.log("This is user data",data)
  //       } else if (message == "notLogin") {
  //           // setNotRegistered(true)
  //         console.log("This is user data",response)
  //       }
  //   });
  // }, []);
  return (
        // <UserData.Provider value={{userData:data}}>
      <Router>
      <Navbarcomp />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Auth" element={<MainAuth/>} />
          <Route path="/user" element={<UserDataComp/>} />
        <Route path="/dashboard" element={<Dashboardcomp />} />
        <Route path="/additems" element={<Additems />} />
        <Route path="/store" element={<AllItemsInStore />} />
        
          <Route path="*" element={<NotFound/>} />

          

        </Routes>
          <Footercomp/>
        </Router>
      //  </UserData.Provider>
  );
}

export default App;

import React, { Fragment } from "react";
import { Tabs } from "flowbite-react";
import {HiUserCircle,HiUserAdd} from 'react-icons/hi'
import { FaHospital } from 'react-icons/fa'
// import Navbarcomp from "./Navbarcomp";
import Login from "./Login";
import SignUp from "./SignUp";
function MainAuth() {
    return (
        <Fragment>
            {/* <Navbarcomp/> */}
    {/* <div className="mx-auto flex flex-row justify-center my-5"> */}
      <Tabs.Group aria-label="Tabs with icons" style="underline">
              
    
        <Tabs.Item title="Login" active={true}  icon={HiUserCircle}>
            <Login/>
        </Tabs.Item>
        <Tabs.Item  title="SignUp" icon={HiUserAdd}>
        <SignUp/>
        </Tabs.Item>
        
      </Tabs.Group>
            {/* </div> */}
            </Fragment>
  );
}

export default MainAuth;

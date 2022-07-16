import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { HiStatusOnline } from 'react-icons/hi';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { setname ,setlogin} from '../store/userStore';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { NavNavLink } from 'react-router-dom';
import Modalcomp from './Modal/Modalcomp';
import SuccessAlertComp from './Alert/SuccessAlertComp';
function Navbarcomp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(store => store.users.name);
  const islogin = useSelector(store => store.users.login);
  const [showLogooutModal, setshowLogooutModal] = useState(false);
  const [showlogouttext, setshowlogouttext] = useState(false);
  const DismissModal = ({logout}) => {
    if (logout == false) {
      setshowLogooutModal(false)
    } else if(logout===true) {
      setshowLogooutModal(false)
      setshowlogouttext(true)
      localStorage.removeItem('token');
      navigate('/');
      dispatch(setname(''));
      dispatch(setlogin(false));

    }
      
  }
  return (
    <div className='sticky top-0 z-10'>
      {showLogooutModal && <Modalcomp show={true} dismiss={DismissModal} />}
          <Navbar  className='bg-gradient-to-r from-violet-400 via-pink-400 to-red-300 backdrop-blur-[1px] bg-opacity-70 shadow-lg' 
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://payalcomputers.com/">
    <img
     src={process.env.PUBLIC_URL+"logo.png"}
      className="mr-3 h-6 sm:h-9"
      alt="Logo"
    />
    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white ">
     PayalComputers
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
      {islogin &&    <Dropdown
            // for making dropdown disable
            className={name===''?'hidden':''}
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
        {name}
        </span>
        <span className="inline-flex truncate text-xs text-green-500 font-medium">
       <HiStatusOnline  size={20}></HiStatusOnline>
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
            <Dropdown.Item onClick={() => { navigate('/myorders')}}>
      My Orders
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={()=>setshowLogooutModal(true)}>
        Sign out
      </Dropdown.Item>
          </Dropdown>}
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
       
    <NavLink
      to="/" className={({ isActive }) =>
      isActive ? "text-gray-200" : undefined
    }
    >
      Home 
    </NavLink>
    <NavLink to="/about"    className={({ isActive }) =>
              isActive ? "text-gray-200" : undefined
            }>
      About
    </NavLink>
    <NavLink to="/ordernow"className={({ isActive }) =>
              isActive ? "text-gray-200" : undefined
            }>
      Order Now
    </NavLink>
    <NavLink to="/Pricing"className={({ isActive }) =>
              isActive ? "text-gray-200" : undefined
            }>
      Pricing
    </NavLink>
    <NavLink to="/navbars"className={({ isActive }) =>
              isActive ? "text-gray-200" : undefined
            }>
      Contact
          </NavLink>
          { !islogin && <NavLink to="/auth" className={({ isActive }) =>
              isActive ? "text-gray-200" : undefined
            }>
      Login/SignUP
    </NavLink>}
  </Navbar.Collapse>
      </Navbar>
      { showlogouttext && <SuccessAlertComp dismiss={setshowlogouttext} exclamation="Hey User" message="You logout successfully"/>}
      
    </div>
  )
}

export default Navbarcomp;
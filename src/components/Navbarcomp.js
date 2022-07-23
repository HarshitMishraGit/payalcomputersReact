import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router';
import { HiStatusOnline } from 'react-icons/hi';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import { setname ,setlogin} from '../store/userStore';
import { useSelector, useDispatch } from 'react-redux';
import { MdDarkMode ,MdLightMode} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
// import { NavNavLink } from 'react-router-dom';
import Modalcomp from './Modal/Modalcomp';
import SuccessAlertComp from './Alert/SuccessAlertComp';
function Navbarcomp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(store => store.users.name);
  const islogin = useSelector(store => store.users.login);
  const role = useSelector((store) => store.users.role);
  const [showLogooutModal, setshowLogooutModal] = useState(false);
  const [showlogouttext, setshowlogouttext] = useState(false);
  // const [navClass, setNavClass] = useState('dark:bg-slate-900/75');
  // for darkMode
  const [theme, settheme] = useState(localStorage.theme?localStorage.theme:"light");
  // for darkMode
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

  // for Dark Mode
  function hhh() {
    if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
    } else {
    document.documentElement.classList.remove('dark')
    } 
  }
  // only first time 
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      settheme('dark');
    } else {
      // if no theme key is present set default to light mode
      settheme('light');
    } 
  }, [])
  // only first time 
  const mode = () => {
    // // let theme=localStorage.theme

    // document.documentElement.classList.toggle('dark')
    if( localStorage.theme == 'light'){
      localStorage.theme = 'dark';
      // console.log("Theme becomes dark");
      settheme('dark');

    }
        
    else if(localStorage.theme == 'dark' ){

      localStorage.theme = 'light';
      // console.log("Theme becomes light")
      settheme('light');

    }
    // localStorage.theme = "light";
    hhh();

  }
//   window.onscroll = function(ev) {
//     // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     //     // you're at the bottom of the page
//     // }
//     setNavClass("dark:bg-slate-900/75");
//     if(window.scrollY==0){
//       //user scrolled to the top of the page
//       setNavClass("dark:bg-slate-900/75 bg-gray-200");
//      }
// };
  // for Dark Mode
  return (
    <div className='sticky top-0 z-10'>
      {showLogooutModal && <Modalcomp show={true} dismiss={DismissModal} />}
      <Navbar className={`dark:bg-slate-900 dark:bg-opacity-75 bg-gray-200 backdrop-blur bg-opacity-70 shadow-lg
         transition-colors  duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] `} 
  fluid={true}
        rounded={false}
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
           {role==="user"&& <Dropdown.Item onClick={() => { navigate('/myorders')}}>
      My Orders
      </Dropdown.Item>}
           {role==="admin"&& <Dropdown.Item onClick={() => { navigate('/loadallorders')}}>
      All Orders
      </Dropdown.Item>}
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
      isActive ? "text-sky-600  " : "dark:text-white dark:font-normal"
    }
    >
      Home 
    </NavLink>
    
    <NavLink  to="/about"    className={({ isActive }) =>
              isActive ? "text-sky-600 drop" : "dark:text-white dark:font-normal"
            }>
      About
    </NavLink>
    <NavLink  to="/ordernow"className={({ isActive }) =>
              isActive ? "text-sky-600  " : "dark:text-white dark:font-normal"
            }>
      Order Now
    </NavLink>
    <NavLink  to="/Pricing"className={({ isActive }) =>
              isActive ? "text-sky-600  " : "dark:text-white dark:font-normal"
            }>
      Pricing
    </NavLink>
    <NavLink  to="/navbars"className={({ isActive }) =>
              isActive ? "text-sky-600  " : "dark:text-white dark:font-normal"
            }>
      Contact
          </NavLink>
          { !islogin && <NavLink  to="/auth" className={({ isActive }) =>
              isActive ? "text-sky-600  " : "dark:text-white dark:font-normal"
            }>
      Login/SignUP
          </NavLink>}

          <button 
      className='outline-none'
            onClick={mode} >
            {theme === "light" ? <MdDarkMode size={25} ></MdDarkMode> : <MdLightMode size={25} color={ "white"}></MdLightMode>}
    </button>
          
  </Navbar.Collapse>
      </Navbar>
      { showlogouttext && <SuccessAlertComp dismiss={setshowlogouttext} exclamation="Hey User" message="You logout successfully"/>}
      
    </div>
  )
}

export default Navbarcomp;
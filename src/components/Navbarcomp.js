import React from 'react'
import { Navbar, Dropdown,Avatar } from 'flowbite-react';
function Navbarcomp() {
  return (
      <div className='sticky top-0 z-10'>
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
          <Dropdown
            // for making dropdown disable
            className='hidden'
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Navbarcomp;
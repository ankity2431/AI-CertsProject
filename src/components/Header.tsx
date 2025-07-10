import React from 'react';
import {
  Navbar,
  Button,
  Input,
  Form,
  Dropdown,
  Badge,
  Indicator,
  Card,
} from 'react-daisyui';

const Header = ({toggleSidebar}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50 flex justify-between items-center px-4">
     <div className='flex items-center'>

     <Button onClick={toggleSidebar} className="lg:hidden " color="ghost" shape="circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>

        <Button tag="a" className="text-xl normal-case mr-[8rem] pl-0" color="ghost">
        <img className="md:w-[157px] md:h-[32px] w-[120px]" src="/images/NetCom.png" alt="logo" />
        </Button>
        <Form className="hidden lg:block">
          <Input bordered type="text" placeholder="Search" className="h-[2rem] pr-[12rem] ml-5" />
        </Form>
        </div>
    <div className='flex  items-center'>
        <Button className='hidden sm:inline' color="ghost" shape="circle">
          <Indicator>
          <Badge size="sm" className={`bg-red-500 text-white ${Indicator.Item.className()}`}>
                1
              </Badge>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </Indicator>
        </Button>

        <Button tag="label" tabIndex={0} color="ghost" shape="circle">
            <Indicator>
              
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Indicator>
          </Button>

          <Button tag="label" tabIndex={0} color="ghost" className="avatar" shape="circle">
            <div className="w-10 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </Button>

          <span className='text-sm hidden sm:inline'>R. Spencer</span>
          </div>
      
    </div>
  );
};

export default Header;

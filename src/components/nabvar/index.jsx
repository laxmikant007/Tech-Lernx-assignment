import React from "react";
import { VscBellDot } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import logo from "../../assets/img/logo.png"
import {CiSearch} from "react-icons/ci"

const Navbar = (props) => {

  const navItems = [
    {
      title: 'Notifications',
      icon: <VscBellDot
        size={25}
      />
    },
    {
      title: 'Message',
      icon: <HiOutlineMail
        size={25}
      />
    },
   
  ];
  return (
    <div
      className="flex flex-row"
    >
      <div
        className="w-1/5 flex flex-row justify-center items-center border-r-2 border-b-2 border-gray"
      >
        <img src={logo} alt="logo" />
      </div>
      <div
        className="w-4/5 flex flex-row justify-end items-center p-4"
      > 
      <a className="mx-20 font-semibold underline color:#353148" href="https://laxmikant.co/ " target="_blank">visit my profile!!  </a>
      <CiSearch size={25}/>
        <input
          type="text"
          placeholder="Search..."
          className="mx-2 max-w-sm w-full py-1 px-2 border rounded border-gray"
        />
        {
          navItems.map((item) => (
            <div
              className="p-2 border mx-2 rounded-sm border-gray cursor-pointer"
            >
              {item.icon}
            </div>
          ))
        }
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/38/30/80/1000_F_338308078_iiXC8b9lxpxmjGKaKu4dtXHSIVfzE8qm.jpg"
          alt=''
          className='h-10 w-10 rounded-full cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Navbar;

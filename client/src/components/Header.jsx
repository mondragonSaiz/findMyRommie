import React, { useState } from 'react';
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiHomeOfficeFill,
} from 'react-icons/ri';
import { SiLoop } from 'react-icons/si';
import { MdMapsHomeWork } from 'react-icons/md';

import brandLogo from '../assets/images/rommieS-logo.png';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh]  z-50">
      <div className="xl:w-1/6 text-center -mt-1">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          RommieSearch
          <SiLoop className="absolute -left-3 -bottom-3 text-red-500 -z-10" />
          <MdMapsHomeWork className="absolute -right-3 -top-4 text-violet-500 -z-10" />
        </a>
      </div>
      <nav
        className={`fixed xl:static bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? 'left-0 ' : '-left-full'
        } top-0  flex flex-1 flex-col xl:flex-row justify-center items-center gap-10 transition-all duration-500`}
      >
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Sign Up</a>
        <a href="#">Log In</a>
      </nav>
      <button className="xl:hidden" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
}

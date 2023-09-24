import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { BsSearchHeart } from 'react-icons/bs';
import { MdMapsHomeWork } from 'react-icons/md';
export default function Header({ handleLoginModal, handleSignUpModal }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh]  z-50">
      <div className="xl:w-1/6 text-center -mt-1">
        <a
          href="#"
          className="text-2xl font-bold relative p-1 bg-white "
          style={{ fontFamily: 'Gloock, serif' }}
        >
          RommieSearch
          <BsSearchHeart className="absolute -left-4 -bottom-3 text-red-500 -z-10" />
          <MdMapsHomeWork className="absolute -right-3 -top-4 text-violet-500 -z-10" />
        </a>
      </div>
      <nav
        className={`fixed xl:static bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? 'left-0 ' : '-left-full'
        } top-0  flex flex-1 flex-col xl:flex-row justify-center items-center gap-10 transition-all duration-500 cursor-pointer`}
        style={{ fontFamily: 'Gloock, serif' }}
      >
        <a
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          About Us
        </a>
        <a
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          Contact
        </a>
        <a
          onClick={handleSignUpModal}
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          Sign Up
        </a>
        <a
          onClick={handleLoginModal}
          href="#"
          className="hover:bg-slate-200 p-2 rounded-lg transition-all ease-in-out duration-700"
        >
          Log In
        </a>
      </nav>
      <button className="xl:hidden" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Gloock&display=swap');
      </style>
    </header>
  );
}

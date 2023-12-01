import React from 'react'
import { GrFavorite } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";

function Navbar() {
  return (
    <div className="bg-white text-orange-600 font-bold sticky top-0 z-50">
      <div className='navbar w-11/12 mx-auto'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="hover:text-orange-700 text-3xl" />
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href='/#'>Home</a></li>
              <li><a href='/#about'>About Us</a></li>
              <li><a href='/#restaurant'>Restaurant</a></li>
              <li><a>Book</a></li>
            </ul>
          </div>
          <div>
            <a className="btn btn-ghost text-3xl"><img src="/Logo.png" alt="Logo Brand" className='h-[60px]' /><span className='hidden lg:flex'>westCorner</span></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li><a className='hover:bg-orange-600 hover:text-white' href='/'>Home</a></li>
            <li><a className='hover:bg-orange-600 hover:text-white' href='/#about'>About Us</a></li>
            <li><a className='hover:bg-orange-600 hover:text-white' href='/#restaurant'>Restaurant</a></li>
            <li><a className='hover:bg-orange-600 hover:text-white'>Book</a></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <a href="/favorite"><GrFavorite className="hover:text-orange-700 text-3xl font-bold cursor-pointer" /></a>
          <a className="btn rounded-full px-10 text-xl hover:bg-orange-700 bg-orange-600 border-none text-white">Sign In</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'

function Navbar() {
  return (
    <div className="navbar w-11/12 mx-auto bg-white text-orange-600 font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
            <li><a>Menu</a></li>
          </ul>
        </div>
        <div>
          <a className="btn btn-ghost text-3xl"><img src="/Logo.png" alt="Logo Brand" className='h-[60px]' />westCorner</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><a className='hover:bg-orange-600 hover:text-white'>Home</a></li>
          <li><a className='hover:bg-orange-600 hover:text-white'>About Us</a></li>
          <li><a className='hover:bg-orange-600 hover:text-white'>Contact</a></li>
          <li><a className='hover:bg-orange-600 hover:text-white'>Menu</a></li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer hover:text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        <a className="btn rounded-full px-10 text-xl hover:bg-orange-700 bg-orange-600 border-none text-white">Sign In</a>
      </div>
    </div>
  )
}

export default Navbar
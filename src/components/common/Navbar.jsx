import React from 'react';
import { useSelector } from 'react-redux'
import ProfileDropdown from './ProfileDropdown';
import Logo2 from '../../assets/image/logo2.png';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <div class="bg-white">
      <nav class="py-4 flex justify-between items-center w-11/12 mx-auto relative">
        <a class="text-3xl font-bold leading-none flex gap-2" href="/">
          <img src={Logo2} className='h-14 ml-4' alt='logo' />
        </a>
        {token == null ? (<div className="flex gap-2">
          <a class="lg:inline-block py-3 px-6 bg-orange-300 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 h-12 " href="/login">Login / Registration</a>
          <a class="lg:inline-block py-3 px-6 bg-orange-300 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="/admin-login">Admin Login</a>
        </div>) : (<ProfileDropdown />)}
      </nav>
      <div class="bg-blue-300 ">
        <div className=" w-11/12 mx-auto flex justify-between ">
          <ul className="flex text-blue-500 divide-x">
            <li></li>
            <li className="">
              <a href="/"><div className='h-12 text-center text-richblack-25 hover:bg-blue-400 transition-colors duration-300 pt-3 pb-3 pl-4 pr-4'>Home</div></a>
            </li>
            <li>
              <a href="/about"><div className='h-12 text-center text-richblack-25 hover:bg-blue-400 transition-colors duration-300 pt-3 pb-3 pl-4 pr-4'>About</div></a>
            </li>
            <li>
              <a href="/resources"><div className='h-12 text-center text-richblack-25 hover:bg-blue-400 transition-colors duration-300 pt-3 pb-3 pl-4 pr-4'>Resources</div></a>
            </li>
            <li >
              <a href="/support"><div className='h-12 text-center text-richblack-25 hover:bg-blue-400 transition-colors duration-300 pt-3 pb-3 pl-4 pr-4'>Support</div></a>
            </li>
            <li></li>
          </ul>

          {/* Search bar */}
          <div className='my-auto'>
            <input
              type="text"
              placeholder="Search Your Doctor/Facility"
              className="w-64 px-2 py-1 rounded-lg bg-blue-500 border-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-600"
            />
            <button className="bg-orange-300 text-white px-2 py-1 ml-2 rounded-lg transition-all duration-300 hover:bg-orange-200 hover:text-white">
              Search
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
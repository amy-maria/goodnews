'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const handleSmallScreenNav = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header className='bg-slate-200 text-black w-full ease-in duraction-300 fixed top-0 left-0 z-10'>
      <nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4 '>
        <div>
          <Link href='/logo' onClick={handleSmallScreenNav}>
            <span className='font-extrabold text-3xl md:text-2xl xl:text-3xl '>
              Logo
            </span>
          </Link>
        </div>

        {/* large screen nav */}
        <ul className='hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] test-slate-600'>
          <li className='mr-4 lg:mr-8 hover:text-slate-800'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mr-4 lg:mr-8 hover:text-slate-800'>
            <Link href='/about'>About</Link>
          </li>
          <li className='mr-4 lg:mr-8 hover:text-slate-800'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='  hover:text-slate-800'>
            <Link href='/profile'>My Profile</Link>
          </li>
        </ul>
        {/* login to modal login page, logout returns to Home */}
        <div className='hidden md:flex'>
          <button className='mr-5 bg-sky-700 px-2 py-2 rounded-full text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
            Log In
          </button>
          <button className='mr-5 bg-sky-700 px-2 py-2 rounded-full text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
            Log Out
          </button>
        </div>
        {/*smaller screen nav with hamburger button*/}
        <div className='flex md:hidden' onClick={handleSmallScreenNav}>
          {menuIcon ? <FaTimes /> : <FaBars />}
        </div>
        {/* small screen navbar w/hamburger menu */}
        <div
          className={
            menuIcon
              ? 'md:hidden absolute top-[100px] right-0    bg-slate-200 text-black ease-in duration-150 cursor-pointer'
              : 'md:hidden absolute top-[100px] right-[-100%]    bg-slate-200 text-black text-center ease-in duration-500 cursor-pointer'
          }>
          <div>
            {/* small screen nav links */}
            <ul className='md:hidden uppercase font-bold text-md text-slate-600'>
              <li
                className='mr-4 p-2 hover:text-slate-900'
                onClick={handleSmallScreenNav}>
                <Link href='/'>Home</Link>
              </li>
              <li
                className='mr-4 p-2 hover:text-slate-800'
                onClick={handleSmallScreenNav}>
                <Link href='/about'>About</Link>
              </li>
              <li
                className='mr-4 p-2 hover:text-slate-800'
                onClick={handleSmallScreenNav}>
                <Link href='/contact'>Contact</Link>
              </li>
              <li
                className='mr-4 p-2 hover:text-slate-800'
                onClick={handleSmallScreenNav}>
                <Link href='/profile'>My Profile</Link>
              </li>
            </ul>
            {/* login to modal login page, logout returns to Home */}

            <div className='md:hidden'>
              <button className='w-[150px] bg-sky-700  py-2 rounded-full text-white hover:bg-sky-800 '>
                Log In
              </button>
              <button className='w-[150px] bg-sky-700  py-2 rounded-full text-white hover:bg-sky-800 '>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/profile', label: 'Profile' },
];

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const pathname = usePathname();
  const handleSmallScreenNav = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header className='bg-dark text-muted  transition-all duration-300 sticky top-0 left-0 z-10 shadow-md'>
      <nav className='max-w-7xl mx-auto h-20 flex justify-between items-center px-4 '>
        <div>
          <Image
            className='logo rounded-2xl h-[75px] w-[75px]'
            src='/logo-svg.svg'
            width={75}
            height={75}
            alt='Logo for Good News with a drawing of a typewriter'
          />
        </div>

        {/* large screen nav */}
        <ul className='hidden md:flex items-center gap-4 lg:gap-8 uppercase font-semibold text-sm lg:text-base'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? 'bg-dark-elevated text-light rounded-full px-4 py-2 shadow-[0_0_12px_2px_rgba(56,189,248,0.35)]'
                    : 'px-4 py-2 hover:text-light transition-colors'
                }>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/*smaller screen nav with hamburger button*/}
        <div
          className='flex md:hidden text-light text-xl cursor-pointer'
          onClick={handleSmallScreenNav}>
          {menuIcon ? <FaTimes /> : <FaBars />}
        </div>

        {/* small screen navbar w/hamburger menu */}
        <div
          className={
            menuIcon
              ? 'md:hidden absolute top-20 right-0    bg-dark-elevated text-muted ease-in duration-150 cursor-pointer'
              : 'md:hidden absolute top-20 -right-full   bg-dark-elevated text-muted text-center ease-in duration-500 cursor-pointer'
          }>
          <div>
            {/* small screen nav links */}
            <ul className='uppercase font-bold text-md'>
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className='p-2'
                  onClick={handleSmallScreenNav}>
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href
                        ? 'bg-dark-elevated  text-light rounded-full px-4 py-2 shadow-[0_0_12px_2px_var(--color-accent)]'
                        : 'hover:text-light transition-colors'
                    }>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* login to modal login page, logout returns to Home */}
          </div>
        </div>
      </nav>
    </header>
  );
}

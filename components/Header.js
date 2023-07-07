'use client';

import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import NavLinks from './NavLinks';

const navLinks = [
  {
    title: 'Abstract',
    link: '/',
  },
  {
    title: 'EVENTS',
    link: '/',
  },
  {
    title: 'MEMBER REGISTRATION',
    link: '/',
  },
  {
    title: 'INVESTOR',
    link: '/',
  },
  {
    title: 'PROJECT',
    link: '/',
  },
  {
    title: 'DEPARTMENT',
    link: '/',
  },
  {
    title: 'CONTACT',
    link: '/',
  },
];

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };
  const MotionLink = motion(Link);
  return (
    <header className=" p-8  bg-black/80   fixed top-0 left-0 right-0 z-30 ">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.6 }}
        className=" flex items-center justify-between w-[98%] sm:w-[90%] mx-auto "
      >
        <div className="left text-base md:text-3xl">
          <MotionLink className="text-white" href={'/'}>
            Alaigbo
          </MotionLink>
        </div>
        <div className="right space-x-4 hidden lg:flex items-center self-end">
          <MotionLink className="text-white" href={'/'}>
            Join The Alaigbo Community
          </MotionLink>
          <MotionLink
            href={'/'}
            className="bg-[#00AA00] p-2 rounded-sm text-white"
          >
            INVEST IN ALAIGBO
          </MotionLink>
          <motion.div
            className="flex space-x-2 text-white cursor-pointer"
            onClick={handleMenu}
          >
            <h3>Menu</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.div>
        </div>
        <AnimatePresence>
          {menuIsOpen && (
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: -50 }}
              transition={{
                type: 'spring',
                stiffness: 100,

                ease: 'linear',
                duration: 0.5,
              }}
              exit={{ x: 500 }}
              className="menu-lg bg-[#373435] flex items-center flex-col justify-center h-screen absolute w-[500px] top-0 -right-14 -translate-x-[50px] bottom-0"
            >
              <FaTimes
                color="white"
                size={25}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setMenuIsOpen(false)}
              />
              {navLinks.map((item, i) => (
                <NavLinks key={i} item={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 lg:hidden block"
          onClick={() => setMenuMobile(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <AnimatePresence>
          {menuMobile && (
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: -56 }}
              transition={{
                type: 'spring',

                ease: 'linear',
                duration: 0.5,
              }}
              exit={{ x: 500 }}
              className="menu-lg bg-[#373435] flex items-center flex-col justify-center h-screen absolute w-full top-0 -right-14 -translate-x-[50px] bottom-0"
            >
              <FaTimes
                color="white"
                size={25}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setMenuMobile(false)}
              />
              {navLinks.map((item, i) => (
                <NavLinks key={i} item={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <div className="bg-[#FEFEFE] min-h-screen py-[100px] px-4">
      <h1 className="text-center text-3xl  md:text-5xl font-bold text-[#F37435] mb-16">
        WHY CHOOSE <span className="text-[#00AA00]">ALAIGBO</span>
      </h1>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-y-8 container mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 3000 }}
          className="border border-black rounded-md md:h-[320px]  h-[200px]"
        ></motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          <h2 className="font-bold text-center mb-4 text-3xl">Human Capital</h2>
          <div className="text-center">
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="border border-black rounded-md md:h-[320px] h-[200px]"
        ></motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          <h2 className="font-bold text-center mb-4 text-3xl">INVESTMENT</h2>
          <div className="text-center">
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
            <p>Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-20">
        <Link
          href={'/'}
          className="bg-[#00AA00]  rounded-md px-8 text-white py-3"
        >
          INVEST
        </Link>
      </div>
    </div>
  );
};

export default Main;

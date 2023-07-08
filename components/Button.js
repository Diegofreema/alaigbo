'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const MotionLink = motion(Link);
const Button = ({ ...props }) => {
  const { title } = { ...props };
  return (
    <MotionLink
      {...props}
      className="bg-[#00AA00] inline-block rounded-md px-8 text-white py-3"
    >
      {title}
    </MotionLink>
  );
};

export default Button;

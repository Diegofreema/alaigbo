import Link from 'next/link';
import React from 'react';

const NavLinks = ({ item }) => {
  const { link, title } = item;
  return (
    <Link
      className="text-white border border-[#F58634] w-fit py-2 px-4 mb-4"
      href={link}
    >
      {title}
    </Link>
  );
};

export default NavLinks;

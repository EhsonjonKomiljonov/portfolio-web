import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
import React from 'react';

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto px-40">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={200} />
          </Link>
          <p className="text-2xl text-logo tracking-widest font-semibold">
            portfolio_ehsonjon
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

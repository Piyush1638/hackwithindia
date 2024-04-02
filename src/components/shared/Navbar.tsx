import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mobilemenu from "../MobileMenu";

const Navbar = () => {
  const navlinks = [
    {
      url: "/recycle",
      title: "Recycle",
    },
    {
      url: "/sell",
      title: "Sell",
    },
    {
      url: "/buy",
      title: "Buy",
    },
    {
      url: "/e-waste-collection",
      title: "E-waste Collection",
    },
    {
      url: "/login",
      title: "Login",
    },
  ];
  return (
    <nav className="w-full fixed top-0 px-4 py-4 shadow-lg bg-white shadow-gray-300">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={80}
            width={200}
            className="h-[40px] w-[100px] tablet:h-[40px] tablet:w-[150px]"
          />
        </Link>
        <div className="hidden tablet:block">
          <ul className="flex space-x-6">
            {navlinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="text-md font-semibold text-gray-900"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu */}
        <Mobilemenu />
      </div>
    </nav>
  );
};

export default Navbar;

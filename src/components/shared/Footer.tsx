import Image from "next/image";
import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-8">
      <div className="w-full flex items-center flex-col tablet:flex-row tablet:justify-between gap-10">
        <div className="flex flex-col gap-3">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={100}
            width={150}
          />
          <p>copyright 2024 E-wasteR</p>
        </div>
        <div>
          <div className="flex items-center">
            <p>Follow us: </p>
            <div className="flex items-center justify-center gap-2">
              <RiFacebookFill className="text-2xl" />
              <RiInstagramFill className="text-2xl" />
              <RiLinkedinFill className="text-2xl" />
              <GrTwitter className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

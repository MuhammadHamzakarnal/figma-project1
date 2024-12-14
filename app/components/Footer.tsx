import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitter,  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

import { Heebo } from "next/font/google";
const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="bg-footerBackround h-[243px] flex flex-col items-center justify-center space-y-6">
      <div className="flex space-x-5">
        <Link href={""}>
          <FaFacebookSquare className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaInstagram className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaTwitter className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          <FaLinkedin className="w-[30px] h-[30px]" />
        </Link>
      </div>
      <p className={`${heebo.className} text-center font-medium text-[22px] `}>
        Copyright ©2020 All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;

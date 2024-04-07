import { logo } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Link href="/" className="text-white">
      <Image
        src={logo}
        alt="logo"
        width={40}
        height={40}
        className="object-cover"
      />
    </Link>
  );
};

export default NavLogo;

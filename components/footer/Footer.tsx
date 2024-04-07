import { logo } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-8 pb-20 pt-14">
      <Link href="/" className="text-white">
        <Image
          src={logo}
          alt="logo"
          width={60}
          height={60}
          className="object-cover"
        />
      </Link>

      <ul className="flex items-center md:gap-9 gap-6 uppercase font-normal text-sm">
        <li>
          <Link
            href="/"
            className="text-lightest-slate/60 hover:text-lightest-slate duration-300 ease-linear"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lightest-slate/60 hover:text-lightest-slate duration-300 ease-linear"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lightest-slate/60 hover:text-lightest-slate duration-300 ease-linear"
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="text-lightest-slate/60 hover:text-lightest-slate duration-300 ease-linear"
          >
            Contact
          </Link>
        </li>
      </ul>

      <p
        className={`${RobotoMono.className} text-lightest-slate/60 text-center  leading-6 text-sm mt-2`}
      >
        &copy; All rights reserved by{" "}
        <Link href="/" className="text-green">
        Taha Elmouhajir
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

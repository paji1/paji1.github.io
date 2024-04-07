import { bg1, icon1 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Profiles = () => {
  return (
    <div className="card py-10 md:px-6 px-5 w-full h-full group flex flex-col justify-between">
      <Image src={bg1} alt="bg1" className="bg-card" />

      <ul className="flex items-center justify-center gap-3 h-16">
        <li className="w-[4rem] h-[4rem] z-10">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/tel-mouh/"
            className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
          >
            <FaLinkedinIn className="text-2xl" />
          </Link>
        </li>
        <li className="w-[4rem] h-[4rem] z-10">
          <Link
            target="_blank"
            href="https://github.com/paji1"
            className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </li>
        <li className="w-[4rem] h-[4rem] z-10">
          <Link
            target="_blank"
            href="https://www.instagram.com/tahaelmouhajir5/"
            className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
          >
            <FaInstagram className="text-2xl" />
          </Link>
        </li>
      </ul>

      <div className="z-10 md:mt-0 mt-10">
        <p className="text-lightest-slate/60 mb-1 uppercase text-xs">
          Stay with me
        </p>
        <p className="text-lightest-slate font-semibold text-xl">Profiles</p>
      </div>

      <Link
        href="/contact"
        className="absolute bottom-10 right-8 z-10 opacity-20 group-hover:opacity-100 duration-300 ease-linear"
      >
        <Image src={icon1} alt="icon1" />
      </Link>
    </div>
  );
};

export default Profiles;

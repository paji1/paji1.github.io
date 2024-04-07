import { bg1, icon1 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const ContactsInfoCard = () => {
  return (
    <div className="card py-10 md:px-6 px-5 w-full h-full group flex flex-col justify-between">
      <Image src={bg1} alt="bg1" className="bg-card" />

      <ul className="space-y-4">
        <li className="z-10 flex items-start gap-4">
          <div className="card w-12 h-12 flex justify-center items-center">
            <HiOutlineMail className="text-xl text-lightest-slate" />
          </div>

          <div className="space-y-[3px] z-10">
            <p className="text-lightest-slate text-sm">Email address</p>
            <p className="text-lightest-slate/60 text-sm">
            pajinew@gmail.com
            </p>
          </div>
        </li>
        <li className="z-10 flex items-start gap-4">
          <div className="card w-12 h-12 flex justify-center items-center">
            <HiOutlinePhone className="text-xl text-lightest-slate" />
          </div>

          <div className="space-y-[3px] z-10">
            <p className="text-lightest-slate text-sm">Phone number</p>
            <p className="text-lightest-slate/60 text-sm"><a href="https://wa.me/212656602321?text=Hello%21%20Taha%2C%20I%20just%20saw%20your%20portfolio.%20I%27m..." target="_blank">+212656602321</a></p>
          </div>
        </li>
      </ul>

      <div className="z-10 lg:mt-0 mt-10">
        <p className="text-lightest-slate/60 mb-1 uppercase text-xs">
          Contact me
        </p>
        <p className="text-lightest-slate font-semibold text-xl">Contacts</p>
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

export default ContactsInfoCard;

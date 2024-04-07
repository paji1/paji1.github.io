import { bg1, icon1 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import { BsCodeSlash, BsLayoutWtf } from "react-icons/bs";
import { LuLayoutPanelLeft } from "react-icons/lu";

const ServicesCard = () => {
  return (
    <Link
      href="/services"
      className="card flex flex-col py-10 md:px-8 px-5 w-full h-full group"
    >
      <Image src={bg1} alt="bg1" className="bg-card" />

      <ul className="flex items-center justify-between pb-10 pt-6 md:px-16 px-6">
        <li className="card w-20 h-20 flex justify-center items-center">
          <BsLayoutWtf className="text-[2rem] text-lightest-slate" />
        </li>
        <li className="card w-20 h-20 flex justify-center items-center">
          <LuLayoutPanelLeft className="text-[2rem] text-lightest-slate" />
        </li>
        <li className="card w-20 h-20 flex justify-center items-center">
          <BsCodeSlash className="text-[2rem] text-lightest-slate" />
        </li>
      </ul>

      <div>
        <p className="text-lightest-slate/60 mb-1 uppercase text-xs">
          Specialization
        </p>
        <p className="text-lightest-slate font-semibold text-xl">
          Services Offering
        </p>
      </div>

      <Image
        src={icon1}
        alt="icon1"
        className="absolute bottom-10 right-8 opacity-20 group-hover:opacity-100 duration-300 ease-linear"
      />
    </Link>
  );
};

export default ServicesCard;

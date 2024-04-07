import { bg1, icon1, icon2 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

const ContactCard = () => {
  return (
    <Link
      href="/contact"
      className="card py-10 md:px-8 px-5 w-full h-full group flex items-end"
    >
      <Image src={bg1} alt="bg1" className="bg-card" />

      <Image
        src={icon2}
        alt="icon2"
        className="absolute top-0 left-8 opacity-50 duration-300 ease-linear"
      />

      <div className="pt-16">
        <h2 className="text-lightest-slate font-semibold lg:text-4xl text-3xl mb-1">
          Let&apos;s
        </h2>
        <h2 className="text-lightest-slate font-semibold lg:text-4xl text-3xl">
          Work <span className="text-green">together</span>
        </h2>
      </div>

      <Image
        src={icon1}
        alt="icon1"
        className="absolute bottom-10 right-8 opacity-20 group-hover:opacity-100 duration-300 ease-linear"
      />
    </Link>
  );
};

export default ContactCard;

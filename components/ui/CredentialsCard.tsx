import { bg1, icon1, signature } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

const CredentialsCard = () => {
  return (
    <Link
      href="/about"
      className="card flex flex-col py-10 md:px-6 px-5 w-full group"
    >
      <Image src={bg1} alt="bg1" className="bg-card" />

      <Image
        src={signature}
        alt="signature"
        width={150}
        height={40}
        className="mx-auto py-12 rotate-[-8deg]"
      />

      <div>
        <p className="text-lightest-slate/60 mb-1 uppercase text-xs">
          More about me
        </p>
        <p className="text-lightest-slate font-semibold text-xl">Credentials</p>
      </div>

      <Image
        src={icon1}
        alt="icon1"
        className="absolute bottom-10 right-8 opacity-20 group-hover:opacity-100 duration-300 ease-linear"
      />
    </Link>
  );
};

export default CredentialsCard;

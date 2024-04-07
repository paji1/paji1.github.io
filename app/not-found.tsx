import { bg1 } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex justify-center items-center">
      <section className="card p-10 flex flex-col justify-center items-center gap-6 w-[60%] mt-10">
        <Image src={bg1} alt="bg1" className="bg-card" />
        <h1
          className={`${RobotoMono.className} text-6xl font-bold text-green z-10 move-updown`}
        >
          404
        </h1>
        <p className="text-lightest-slate text-[1.4rem] font-medium z-10">
          Page Not Found
        </p>
        <Link href="/" className="btn btn-white bg-gradient mt-4 z-10">
          Back Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;

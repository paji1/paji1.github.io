import { bg1, computer, icon1, person4 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

const ProjectsCard = () => {
  return (
    <Link
      href="/works"
      className="card py-10 md:px-6 px-5 w-full group flex flex-col"
    >
      <Image src={bg1} alt="bg1" className="bg-card" />

      <h2 className="text-lightest-slate/40 text-center uppercase font-bold text-[22px]">
        My Works
      </h2>

      <div className="relative w-28 h-32 flex items-center mx-auto -mt-3 move-updown">
        <Image src={computer} alt="computer" className="absolute" />
      </div>

      <div>
        <p className="text-lightest-slate/60 mb-1 uppercase text-xs">
          Showcase
        </p>
        <p className="text-lightest-slate font-semibold text-xl">Projects</p>
      </div>

      <Image
        src={icon1}
        alt="icon1"
        className="absolute bottom-10 right-8 opacity-20 group-hover:opacity-100 duration-300 ease-linear"
      />
    </Link>
  );
};

export default ProjectsCard;

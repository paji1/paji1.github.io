import { bg1 } from "@/utils/assets";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Marquee from "react-fast-marquee";
import { RobotoMono } from "@/utils/fonts";

const ParallaxText = () => {
  return (
    <div className={`${RobotoMono.className} card p-4`}>
      <Image src={bg1} alt="bg1" className="bg-card" />
      <Marquee pauseOnHover autoFill speed={110}>
        <div className="flex items-center gap-2 mr-2">
          <p className="text-white/40 uppercase text-xs tracking-widest">
            full stack <span className="text-lightest-slate">developer</span>
          </p>
          <GoDotFill className="text-lightest-slate/60" />
        </div>
        <div className="flex items-center gap-2 mr-2">
          <p className="text-white/40 uppercase text-xs tracking-widest">
            full stack <span className="text-lightest-slate">developer</span>
          </p>
          <GoDotFill className="text-lightest-slate/60" />
        </div>
        <div className="flex items-center gap-2 mr-2">
          <p className="text-white/40 uppercase text-xs tracking-widest">
            full stack <span className="text-lightest-slate">developer</span>
          </p>
          <GoDotFill className="text-lightest-slate/60" />
        </div>
      </Marquee>
    </div>
  );
};

export default ParallaxText;

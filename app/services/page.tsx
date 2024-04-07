import AnimatedCard from "@/components/ui/AnimatedCard";
import ContactCard from "@/components/ui/ContactCard";
import CredentialsCard from "@/components/ui/CredentialsCard";
import Profiles from "@/components/ui/Profiles";
import { bg1, icon2, star } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { BsCodeSlash, BsLayoutWtf } from "react-icons/bs";
import { LuLayoutPanelLeft } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Taha Elmouhajir | Services",
};

const page = () => {
  return (
    <main className="lg:my-16 my-10">
      <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
        <AnimatedCard>
          <div className="card h-96">
            <Image src={bg1} alt="bg1" className="bg-card" />

            <ul className="flex flex-col lg:h-full h-full justify-between md:px-10 px-6 lg:py-20 py-14">
              <li className="flex items-center gap-6 z-10">
                <BsLayoutWtf className="text-[2rem] text-lightest-slate" />
                <p className="text-lightest-slate font-medium text-lg">
                  WEB DESIGNING
                </p>
              </li>
              <li className="flex items-center gap-6 z-10">
                <LuLayoutPanelLeft className="text-[2rem] text-lightest-slate" />
                <p className="text-lightest-slate font-medium text-lg">
                  MOBILE DEVELOPMENT
                </p>
              </li>
              <li className="flex items-center gap-6 z-10">
                <BsCodeSlash className="text-[2rem] text-lightest-slate" />
                <p className="text-lightest-slate font-medium text-lg">
                  WEB DEVELOPMENT
                </p>
              </li>
            </ul>
          </div>
        </AnimatedCard>

        <div className="col-span-2">
          <AnimatedCard styles="flex items-center justify-center md:gap-8 gap-4 lg:mt-0 mt-16">
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="object-cover"
            />
            <h2 className="font-semibold lg:text-[3rem] md:text-4xl text-center text-[1.75rem] text-lightest-slate">
              My Offerings
            </h2>
            <Image
              src={star}
              alt="star"
              width={50}
              height={50}
              className="object-cover"
            />
          </AnimatedCard>

          <AnimatedCard>
            <div className="card md:px-6 px-3 md:pb-6 pb-3 pt-28 mt-10">
              <Image src={bg1} alt="bg1" className="bg-card" />
              <Image
                src={icon2}
                alt="icon2"
                className="absolute top-0 left-8 duration-300 ease-linear"
              />

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="card p-4">
                  <Image src={bg1} alt="bg1" className="bg-card" />
                  <h1
                    className={`${RobotoMono.className} text-lightest-slate/40 font-semibold z-20 relative`}
                  >
                    WEB DESIGNING
                  </h1>
                  <p className="text-lightest-slate mt-3 leading-6 text-[15px] z-20 relative">
                    Elevate your online presence with my personalized web design
                    service. I&apos;m committed to creating visually stunning
                    and functional websites tailored to your unique needs.
                    Whether you&apos;re a startup or an individual looking to
                    make a mark on the web, I&apos;m here to transform your
                    ideas into a captivating digital reality.
                  </p>
                </div>
                <div className="card p-4">
                  <Image src={bg1} alt="bg1" className="bg-card" />
                  <h1
                    className={`${RobotoMono.className} text-lightest-slate/40 font-semibold z-20 relative`}
                  >
                    MOBILE DEVELOPMENT
                  </h1>
                  <p className="text-lightest-slate mt-3 leading-6 text-[15px] z-20 relative">
                    Optimize your digital experience with my mobile development
                    expertise. I specialize in crafting high-performance mobile
                    applications that seamlessly blend functionality with an
                    intuitive user interface. Whether you&apos;re an
                    entrepreneur or an individual seeking a custom app, I&apos;m
                    here to transform your ideas into a sleek and responsive
                    mobile reality.
                  </p>
                </div>
                <div className="card p-4 md:col-span-2 col-span-1">
                  <Image src={bg1} alt="bg1" className="bg-card" />
                  <h1
                    className={`${RobotoMono.className} text-lightest-slate/40 font-semibold z-20 relative`}
                  >
                    WEB DEVELOPMENT
                  </h1>
                  <p className="text-lightest-slate mt-3 leading-6 text-[15px] z-20 relative">
                    Supercharge your online presence with my web development
                    expertise. I specialize in creating dynamic and feature-rich
                    websites that cater to your unique needs. From responsive
                    design to interactive functionality, I focus on delivering a
                    seamless user experience. Whether you&apos;re a startup or
                    an individual looking to enhance your digital footprint,
                    I&apos;m here to turn your web development aspirations into
                    reality.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12">
        <AnimatedCard styles="lg:order-1 order-1">
          <Profiles />
        </AnimatedCard>
        <AnimatedCard styles="md:col-span-2 col-span-1 lg:order-2 order-3">
          <ContactCard />
        </AnimatedCard>
        <AnimatedCard styles="lg:order-3 order-2">
          <CredentialsCard />
        </AnimatedCard>
      </section>
    </main>
  );
};

export default page;

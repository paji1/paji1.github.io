import { bg1 } from "@/utils/assets";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Marquee from "react-fast-marquee";
import { RobotoMono } from "@/utils/fonts";
import { FlipWords } from "./flip-words";

const words = [
	"Passionate",
	"Full Stack",
	"Web Developer",
	"Software Engineer",
	"Transforming Ideas",
	"Into Digital Experiences",
];
const ParallaxText = () => {
	return (
		<div className={`${RobotoMono.className} card p-4 ml-2`}>
			<Image src={bg1} alt="bg1" className="bg-card" />
			<div className="flex items-center gap-2 mr-2">
				<GoDotFill className="text-lightest-slate/60" />
				<p className="text-white/40 uppercase text-xs tracking-widest">
					Hi there, I&apos;m Taha
				</p>
				<p className="text-white/40 uppercase text-xs tracking-widest">
					<FlipWords words={words} /> <br />
				</p>
			</div>
		</div>
	);
};

export default ParallaxText;

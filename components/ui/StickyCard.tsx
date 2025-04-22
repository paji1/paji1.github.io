"use client";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import StickyBox from "react-sticky-box";
import Link from "next/link";
import { bg1, taha } from "@/utils/assets";
import Image from "next/image";
import AnimatedCard from "./AnimatedCard";
import { RobotoMono } from "@/utils/fonts";

const StickyCard = () => {
	return (
		<StickyBox offsetTop={20} className="lg:w-2/6 w-full lg:block hidden">
			<AnimatedCard>
				<div className="card md:p-6 p-3">
					<Image src={bg1} alt="bg1" className="bg-card" />

					<div className="w-full h-80 rounded-30 overflow-hidden relative">
						<Image
							src={taha}
							alt="taha"
							fill
							className="absolute object-cover "
						/>
					</div>

					<h1 className="text-lightest-slate font-semibold text-xl text-center mb-1 mt-10 z-10 relative">
						Taha Elmouhajir{" "}
					</h1>
					<p
						className={`${RobotoMono.className} text-lightest-slate/60 text-[15px] text-center z-10 relative`}
					>
						Full Stack Developer
					</p>

					<ul className="flex items-center justify-center gap-3 h-16 md:px-10 px-6 mt-6">
						<li className="w-14 h-14 z-10">
							<Link
								target="_blank"
								href="https://www.linkedin.com/in/tel-mouh/"
								className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
							>
								<FaLinkedinIn className="text-xl" />
							</Link>
						</li>
						<li className="w-14 h-14 z-10">
							<Link
								target="_blank"
								href="https://github.com/paji1"
								className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
							>
								<FaGithub className="text-xl" />
							</Link>
						</li>
						<li className="w-14 h-14 z-10">
							<Link
								target="_blank"
								href="https://www.instagram.com/tahaelmouhajir5/"
								className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
							>
								<FaInstagram className="text-xl" />
							</Link>
						</li>
					</ul>
				</div>
			</AnimatedCard>
		</StickyBox>
	);
};

export default StickyCard;

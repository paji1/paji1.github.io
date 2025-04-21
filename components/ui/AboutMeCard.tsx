"use client";
import { bg1, taha } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { Button } from "../ui/moving-border";

const AboutMeCard = () => {
	const handleDownload = () => {
		// Construct the URL of the resume file
		const resumeUrl = "assets/resume.pdf";

		// Initiate the download
		window.open(resumeUrl, "_blank");
	};
	return (
		<Button
			borderRadius="1.75rem"
			borderClassName="border-green bg-green"
			
			className="   w-full h-full "
		>
			<div className="card md:p-10 p-5 w-full h-full flex md:flex-row flex-col items-center gap-10 group">
				<Image src={bg1} alt="bg1" className="bg-card" />

				<div className="about-me">
					<Image
						src={taha}
						alt="Taha Elmouhajir"
						fill
						quality={100}
						className="absolute object-cover rounded-tl-[30px] rounded-br-[30px]"
					/>
				</div>

				<div className="z-10">
					<p className="text-green mb-2 text-sm">👋 Hi, my name is</p>
					<h1 className="text-lightest-slate text-3xl font-bold mb-[.5px]">
						Elmouhajir
					</h1>
					<h1 className="text-lightest-slate text-3xl font-bold">
						Taha.
					</h1>
					<p className="text-lightest-slate/60 mt-4 text-sm">
						Passionate Full Stack Web and Mobile Developer.
					</p>

					<button
						onClick={handleDownload}
						className={`${RobotoMono.className} btn btn-white bg-gradient flex items-center justify-center gap-3 mt-8`}
					>
						Get my resume <HiDownload />
					</button>
				</div>
			</div>
		</Button>
	);
};

export default AboutMeCard;

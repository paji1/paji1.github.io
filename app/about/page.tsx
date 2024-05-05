import AnimatedCard from "@/components/ui/AnimatedCard";
import ContactCard from "@/components/ui/ContactCard";
import CredentialsCard from "@/components/ui/CredentialsCard";
import Profiles from "@/components/ui/Profiles";
import { bg1, icon2, star, taha } from "@/utils/assets";
import { RobotoMono } from "@/utils/fonts";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { BsFillCaretRightFill } from "react-icons/bs";

import StickyCard from "@/components/ui/StickyCard";
import Link from "next/link";
import { Lamptitle } from "@/components/ui/AnimatedTitle";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "About"
}
const Page = () => {
	return (
		<main className="lg:my-16 my-10">
			<section className="lg:flex block items-start gap-6">
				<StickyCard />

				<AnimatedCard>
					<div className="card lg:hidden block w-full md:p-6 p-3 ">
						<Image src={bg1} alt="bg1" className="bg-card" />

						<div className="w-full h-80 rounded-30 overflow-hidden relative">
							<Image
								src={taha}
								alt="taha"
								fill
								className="absolute object-cover"
							/>
						</div>

						<h1 className="text-lightest-slate font-semibold text-xl text-center mb-1 mt-10 z-10 relative">
							Taha Elmouhajir
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
									href="http://github.com/paji1"
									className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
								>
									<FaGithub className="text-xl" />
								</Link>
							</li>
							<li className="w-14 h-14 z-10">
								<Link
									target="_blank"
									href=""
									className="font-medium rounded-full text-base w-full h-full btn-white bg-gradient flex justify-center items-center"
								>
									<FaInstagram className="text-xl" />
								</Link>
							</li>
						</ul>
					</div>
				</AnimatedCard>

				<div className="lg:w-4/6 w-full">
					<AnimatedCard>
						<div className="flex items-center justify-center md:gap-8 gap-4 lg:mt-0 mt-16">
							<Lamptitle text="About Me" />
						</div>
					</AnimatedCard>

					<AnimatedCard>
						<div className="card md:px-6 px-3 md:pb-6 pb-3 pt-28 mt-10">
							<Image src={bg1} alt="bg1" className="bg-card" />

							<Image
								src={icon2}
								alt="icon2"
								className="absolute top-0 left-8 duration-300 ease-linear"
							/>

							<div className="z-10 relative">
								<p className="text-lightest-slate/60 mb-4 leading-7">
									👋 Hello, I&apos;m Taha Elmouhajir, a Full
									Stack Web and software Developer who
									embarked on this coding journey in 2017.
									Passionate about transforming innovative
									ideas into functional and captivating
									digital solutions, I specialize in both web
									and software development. With a focus on
									continuous learning, I stay at the forefront
									of technology trends. Beyond coding, I
									believe in the power of technology to create
									meaningful and impactful digital
									experiences.
								</p>

								<p className="text-lightest-slate/60 leading-7">
									Here are a few technologies I’ve been
									learning and working with recently:
								</p>
							</div>

							<div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8 z-10 relative">
								<ul className="text-lightest-slate/60 bg-lightest-slate/5 p-5 rounded-30 text-sm space-y-3">
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Nextjs</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Reactjs</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>JavaScript (ES6+)</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Tailwindcss</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Sass</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Git</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Bash</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>solide skill in C and C++</span>
									</li>
								</ul>
								<ul className="text-lightest-slate/60 bg-lightest-slate/5 p-5 rounded-30 text-sm space-y-3">
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Typescript</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>express.js</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Nest.js</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Nodejs</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>postgres</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>MongoDb</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>Docker</span>
									</li>
									<li className="flex items-center gap-2">
										<BsFillCaretRightFill className="text-green text-[10px]" />
										<span>CI/CD</span>
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-14">
							<h2 className="text-lightest-slate font-semibold text-lg">
								EXPERIENCE
							</h2>
							<div className="mt-6">
								<p className="text-lightest-slate/60 text-base mb-1 font-normal">
									2022 - Present
								</p>
								<h3
									className={`${RobotoMono.className} text-green text-base`}
								>
									@Cari.global full stack developer
								</h3>
								<p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
									🌐 Currently,working on store backend using
									medusa.js
									<br />
									💻 and frontend using next.js
								</p>
							</div>

							<div className="mt-14">
								<p className="text-lightest-slate/60 text-base mb-1 font-normal">
									2023 - 2024
								</p>
								<h3
									className={`${RobotoMono.className} text-green text-base`}
								>
									Full Stack web developer
								</h3>
								<p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
									🌐 i Full stack development using express
									and react.js <br /> 💻 i create
									infrastructure, Devops ci/cd pipeline
								</p>
							</div>
						</div>

						<div className="mt-14">
							<h2 className="text-lightest-slate font-semibold text-lg">
								EDUCATION
							</h2>
							<div className="mt-6">
								<p className="text-lightest-slate/60 text-base mb-1 font-normal">
									2023-2023
								</p>
								<h3
									className={`${RobotoMono.className} text-green text-base`}
								>
									Baccalaureate In Mathematics Sciences
								</h3>
								<p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
									Technique farabi High School
								</p>
							</div>

							<div className="mt-14">
								<p className="text-lightest-slate/60 text-base mb-1 font-normal">
									2015 - 2018
								</p>
								<h3
									className={`${RobotoMono.className} text-green text-base`}
								>
									Sciences Mathématiques Informatiques
								</h3>
								<p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
									University Mohammed V, Rabat
								</p>
							</div>
							<div className="mt-14">
								<p className="text-lightest-slate/60 text-base mb-1 font-normal">
									2020 - 2021
								</p>
								<h3
									className={`${RobotoMono.className} text-green text-base`}
								>
									computer training  Program
								</h3>
								<p className="text-lightest-slate/60 font-normal text-[15px] mt-3">
									Université Mohammed VI Polytechnique  <i>(Note: 1337)</i>
								</p>
							</div>
						</div>

						<div className="mt-14">
							<h2 className="text-lightest-slate font-semibold text-lg">
								SKILLS
							</h2>

							<div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-3 mt-6">
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										Nextjs
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "85%" }}
										>
											85%
										</div>
									</div>
								</div>
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										Nodejs (Nestjs/Expressjs)
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "90%" }}
										>
											80%
										</div>
									</div>
								</div>
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										flutter
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "70%" }}
										>
											70%
										</div>
									</div>
								</div>
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										Postgress/MongoDb include typeORM/Prisma
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "80%" }}
										>
											80%
										</div>
									</div>
								</div>
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										Javascript (ES6+)
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "85%" }}
										>
											85%
										</div>
									</div>
								</div>
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										Reactjs
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "85%" }}
										>
											85%
										</div>
									</div>
								</div>
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										bash-linux-unix
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "90%" }}
										>
											90%
										</div>
									</div>
								</div>
								<div>
									<p
										className={`${RobotoMono.className} dark:text-lightest-slate/50 text-dark/60 mb-3`}
									>
										Taiwlindcss
									</p>
									<div className="w-full bg-lightest-slate/20 rounded-full">
										<div
											className="bg-green/60 text-xs font-medium text-dark text-center p-[.5px] leading-none rounded-l-lg"
											style={{ width: "90%" }}
										>
											90%
										</div>
									</div>
								</div>
							</div>
						</div>
					</AnimatedCard>
				</div>
			</section>

			<section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-20">
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

export default Page;

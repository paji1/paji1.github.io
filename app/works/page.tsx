import AnimatedCard from "@/components/ui/AnimatedCard";
import { LampContainer } from "@/components/ui/lamp";
import {
	bg1,
	blog,
	booking,
	foodManagement,
	nftMarketplace,
	person4,
	pos,
	schoolManagement,
	star,
	tiktok,
	travel,
} from "@/utils/assets";
import { motion } from "framer-motion";
import { RobotoMono } from "@/utils/fonts";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight, BsCaretRight, BsGithub } from "react-icons/bs";
import { Lamptitle } from "@/components/ui/AnimatedTitle";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export const metadata: Metadata = {
	title: "Projects",
};

const page = () => {
	return (
		<main className="lg:my-16 my-10">
			<section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-0">
				<div className="flex gap-6 lg:flex-col md:flex-row flex-col lg:order-1 order-2 lg:mt-0 mt-8">
					<AnimatedCard>
						<CardContainer className=" card w-full p-5">
							<CardBody className=" relative group/card    w-auto sm:w-[30rem] h-auto   ">
								<Image
									src={bg1}
									alt="bg1"
									className="bg-card"
								/>
								<CardItem
									translateZ="80"
									className="w-full mt-4"
								>
									<Link
										href="https://xfood.xelora.tech/"
										target="_blank"
										className="relative z-10"
									>
										<div className="w-full h-56 rounded-30 overflow-hidden relative group">
											<div className="absolute top-0 left-0 w-full h-full bg-green/20 z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
											<Image
												src={foodManagement}
												alt="bong-game"
												fill
												className="absolute object-fill"
											/>
										</div>
									</Link>
								</CardItem>

								<div className="z-10 relative">
									<CardItem
										as={"h1"}
										translateZ="50"
										className="text-lightest-slate font-semibold text-xl mb-1 mt-6"
									>
										Xfood
									</CardItem>
									<CardItem
										as={"p"}
										translateZ="30"
										className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
									>
										Technologies:
									</CardItem>

									<CardItem
										as={"ul"}
										translateZ="30"
										className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
									>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Backend: NestJS
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />{" "}
											Frontend: Nextjs / TypeScript /
											ReactJS
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Database: PostgreSQL
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />{" "}
											Ant Deployment: Docker and Docker
											Compose
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Security: Password hashing, SQL
											injection protection, server-side
											validation
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											User Account: OAuth, Two-factor
											authentication, Friend system
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Chat: Public/private channels,
											Direct messaging, Channel
											permissions
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Game: Live Pong gameplay,
											Matchmaking system, Customization
											options
										</li>
									</CardItem>

									<CardItem
										as={"div"}
										translateZ="30"
										className="flex justify-end  w-full text-lightest-slate/50 gap-4 mt-5"
									>
										<Link
											href="https://yanerp-app.vercel.app/admin/dashboard"
											legacyBehavior
										>
											<a target="_blank" rel="noreferrer">
												<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
											</a>
										</Link>
									</CardItem>
								</div>
							</CardBody>
						</CardContainer>
					</AnimatedCard>

					<AnimatedCard>
						<div className="card w-full p-5">
							<Image src={bg1} alt="bg1" className="bg-card" />

							<Link
								href="https://nft-marketplace-five-alpha.vercel.app"
								target="_blank"
								className="relative z-10"
							>
								<div className="w-full h-56 rounded-30 overflow-hidden relative group">
									<div className="absolute top-0 left-0 w-full h-full bg-green/20 z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
									<Image
										src={nftMarketplace}
										alt="nft-marketplace"
										fill
										className="absolute object-fill"
									/>
								</div>
							</Link>

							<div className="z-10 relative">
								<h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
									NFT marketplace
								</h1>
								<p
									className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
								>
									Technologies:
								</p>

								<ul
									className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
								>
									<li className="flex items-center gap-1 mr-3 mb-1">
										<BsCaretRight className="text-green text-[12px] " />
										Next.js
									</li>
									<li className="flex items-center gap-1 mr-3 mb-1">
										<BsCaretRight className="text-green text-[12px] " />{" "}
										Tailwindcss
									</li>
								</ul>

								<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
									<li></li>
									<li>
										<Link
											href="https://nft-marketplace-five-alpha.vercel.app"
											legacyBehavior
										>
											<a target="_blank" rel="noreferrer">
												<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</AnimatedCard>
				</div>

				<div className="col-span-2 lg:order-2 order-1">
					<AnimatedCard>
						<div className="flex items-center justify-center md:gap-8 gap-4">
							<Lamptitle text="All Projects" />
						</div>
					</AnimatedCard>

					<div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
						<AnimatedCard>
							<div className="card p-5">
								<Image
									src={bg1}
									alt="bg1"
									className="bg-card"
								/>

								<Link
									href="https://booking-app-sage-sigma.vercel.app/"
									target="_blank"
									className="relative z-10"
								>
									<div className="w-full h-56 rounded-30 overflow-hidden relative group">
										<div className="absolute top-0 left-0 w-full h-full bg-green/20 z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
										<Image
											src={booking}
											alt="booking"
											fill
											className="absolute object-fill"
										/>
									</div>
								</Link>

								<div className="z-10 relative">
									<h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
										Booking
									</h1>
									<p
										className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
									>
										Technologies:
									</p>

									<ul
										className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
									>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											React.js
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Tailwindcss
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />{" "}
											Redux
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />{" "}
											Node.js (Express.js)
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />{" "}
											MongoDb
										</li>
									</ul>

									<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
										<li></li>
										<li>
											<Link
												href="https://booking-app-sage-sigma.vercel.app/"
												legacyBehavior
											>
												<a
													target="_blank"
													rel="noreferrer"
												>
													<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</AnimatedCard>

						<AnimatedCard>
							<div className="card p-5">
								<Image
									src={bg1}
									alt="bg1"
									className="bg-card"
								/>

								<Link
									href="https://videoly.vercel.app/"
									target="_blank"
									className="relative z-10"
								>
									<div className="w-full h-56 rounded-30 overflow-hidden relative group">
										<div className="absolute top-0 left-0 w-full h-full bg-green/20 z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
										<Image
											src={tiktok}
											alt="tiktok"
											fill
											className="absolute object-fill"
										/>
									</div>
								</Link>

								<div className="z-10 relative">
									<h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
										TikTok clone
									</h1>
									<p
										className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
									>
										Technologies:
									</p>

									<ul
										className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
									>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Next.js
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Typescript
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											MongoDb
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Tailwindcss
										</li>
									</ul>

									<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
										<li></li>
										<li>
											<Link
												href="https://videoly.vercel.app/"
												legacyBehavior
											>
												<a
													target="_blank"
													rel="noreferrer"
												>
													<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</AnimatedCard>

						<AnimatedCard>
							<div className="card p-5">
								<Image
									src={bg1}
									alt="bg1"
									className="bg-card"
								/>

								<Link
									href="https://elite-travel.vercel.app/"
									target="_blank"
									className="relative z-10"
								>
									<div className="w-full h-56 rounded-30 overflow-hidden relative group">
										<div className="absolute top-0 left-0 w-full h-full bg-green/20 z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
										<Image
											src={travel}
											alt="travel"
											fill
											className="absolute object-fill"
										/>
									</div>
								</Link>

								<div className="z-10 relative">
									<h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
										Travel agency
									</h1>
									<p
										className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
									>
										Technologies:
									</p>

									<ul
										className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
									>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Next.js
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Typescript
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Tailwindcss
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Faramer motion
										</li>
									</ul>

									<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
										<li></li>
										<li>
											<Link
												href="https://elite-travel.vercel.app/"
												legacyBehavior
											>
												<a
													target="_blank"
													rel="noreferrer"
												>
													<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</AnimatedCard>

						<AnimatedCard>
							<div className="card p-5">
								<Image
									src={bg1}
									alt="bg1"
									className="bg-card"
								/>

								<Link
									href="https://zonexa.vercel.app/"
									target="_blank"
									className="relative z-10"
								>
									<div className="w-full h-56 rounded-30 overflow-hidden relative group">
										<div className="absolute top-0 left-0 w-full h-full bg-green/20 z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
										<Image
											src={blog}
											alt="blog"
											fill
											className="absolute object-fill"
										/>
									</div>
								</Link>

								<div className="z-10 relative">
									<h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
										Blog app
									</h1>
									<p
										className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
									>
										Technologies:
									</p>

									<ul
										className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
									>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Next.js
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Next auth
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Typescript
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Tailwindcss
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											MongoDb
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Prisma ORM
										</li>
									</ul>

									<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
										<li></li>
										<li>
											<Link
												href="https://zonexa.vercel.app/"
												legacyBehavior
											>
												<a
													target="_blank"
													rel="noreferrer"
												>
													<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</AnimatedCard>

						<AnimatedCard>
							<div className="card p-5">
								<Image
									src={bg1}
									alt="bg1"
									className="bg-card"
								/>

								<div className="w-full h-56 rounded-30 overflow-hidden relative group">
									<div className="absolute top-0 left-0 w-full h-full bg-green/20 z-10 group-hover:bg-transparent duration-500 ease-linear"></div>
									<Image
										src={pos}
										alt="pos"
										fill
										className="absolute object-fill"
									/>
								</div>

								<div className="z-10 relative">
									<h1 className="text-lightest-slate font-semibold text-xl mb-1 mt-6">
										POS (Point of sale system) app
									</h1>
									<p
										className={`${RobotoMono.className} text-green/60 text-[15px] mt-4 z-10 relative`}
									>
										Technologies:
									</p>

									<ul
										className={`${RobotoMono.className} flex flex-wrap text-lightest-slate/50 text-[13px] lg:text-sm mt-2`}
									>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Next.js
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Next auth
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Typescript
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Tailwindcss
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											Node.js (Express.js)
										</li>
										<li className="flex items-center gap-1 mr-3 mb-1">
											<BsCaretRight className="text-green text-[12px] " />
											MongoDb
										</li>
									</ul>

									<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
										<li></li>
										<li>
											<Link
												href="https://pos-restaurant-plum.vercel.app/en/dashboard"
												legacyBehavior
											>
												<a
													target="_blank"
													rel="noreferrer"
												>
													<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</section>

			<section className="mt-20">
				<AnimatedCard>
					<h2 className="md:text-3xl text-2xl text-lightest-slate/60 font-bold text-center">
						Other Noteworthy Projects
					</h2>
				</AnimatedCard>

				<div className="flex md:flex-row flex-col gap-6 mt-8">
					<AnimatedCard>
						<div className="card p-6 h-full">
							<Image src={bg1} alt="bg1" className="bg-card" />
							<div className="relative z-10">
								<h6 className="text-xl font-semibold text-lightest-slate">
									Simple shopping cart
								</h6>
								<p className="text-lightest-slate/60 text-sm mt-2">
									Building a simple shopping cart using react
									and redux toolkit for state management
								</p>
								<ul
									className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
								>
									<li>React.js</li>
									<li>Styled Components</li>
									<li>Redux Toolkit</li>
								</ul>

								<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
									<li></li>
									<li>
										<Link
											href="https://shopping-cart-ten-chi.vercel.app/"
											legacyBehavior
										>
											<a target="_blank" rel="noreferrer">
												<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</AnimatedCard>

					<AnimatedCard>
						<div className="card p-6 h-full">
							<Image src={bg1} alt="bg1" className="bg-card" />
							<div className="relative z-10">
								<h6 className="text-xl font-semibold text-lightest-slate">
									Weather app
								</h6>
								<p className="text-lightest-slate/60 text-sm mt-2">
									weather app is provide a possibility to
									search about the weather of most cities in
									the world
								</p>
								<ul
									className={`${RobotoMono.className} flex flex-wrap lg:gap-6 gap-3 text-lightest-slate/30 text-[13px] lg:mt-3 mt-6`}
								>
									<li>Next.js</li>
									<li>Open Weather api</li>
								</ul>

								<ul className="flex justify-end text-lightest-slate/50 gap-4 mt-5">
									<li></li>
									<li>
										<Link
											href="https://weather-app-delta-roan.vercel.app/"
											legacyBehavior
										>
											<a target="_blank" rel="noreferrer">
												<BsBoxArrowUpRight className="text-2xl hover:text-green duration-150 ease-in" />
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</AnimatedCard>
				</div>
			</section>
		</main>
	);
};

export default page;

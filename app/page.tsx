import { bg1, hand } from "@/utils/assets";
import Image from "next/image";

// Components
import AboutMeCard from "@/components/ui/AboutMeCard";
import ContactCard from "@/components/ui/ContactCard";
import ParallaxText from "@/components/ui/ParallaxText";
import Profiles from "@/components/ui/Profiles";
import ProjectsCard from "@/components/ui/ProjectsCard";
import CredentialsCard from "@/components/ui/CredentialsCard";
import ServicesCard from "@/components/ui/ServicesCard";
import ContactsInfoCard from "@/components/ui/ContactsInfoCard";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Spotlight } from "@/components/ui/spotlight";
import { PinContainer } from "@/components/ui/3d-pin";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
	return (
		<main className=" relative mt-6 mb-16 ">

			<Spotlight
				className="-top-40 z-0 left-0 md:-top-20 md:left-60"
				fill="#6B7A8F" // Grey blue color in hex
			/>
			<section className="grid lg:grid-cols-2 grid-cols-1 gap-6">
				<AnimatedCard>
					<AboutMeCard />
				</AnimatedCard>
				<div className="space-y-6">
					<AnimatedCard>
						<ParallaxText />
					</AnimatedCard>
					<div className="flex md:flex-row flex-col items-center gap-6 w-full">
						<AnimatedCard styles="w-full">
							<PinContainer
								title="About"
								href="/about"
								className="w-full "
								containerClassName="w-full "
							>
								<CredentialsCard />
							</PinContainer>
						</AnimatedCard>
						<AnimatedCard styles="w-full">
							<PinContainer
								title="Projects"
								href="/works"
								className="   w-56"
							>
								<ProjectsCard />
							</PinContainer>
						</AnimatedCard>
					</div>
				</div>
			</section>

			<section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
				<AnimatedCard styles="lg:order-1 md:order-1 order-1 w-full h-full">
					<ContactsInfoCard />
				</AnimatedCard>

				<AnimatedCard styles="md:col-span-2 lg:order-2 md:order-3 order-2">
					<ServicesCard />
				</AnimatedCard>

				<AnimatedCard styles="lg:order-3 md:order-2 order-3 h-full">
					<Profiles />
				</AnimatedCard>
			</section>

			<section className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
				<AnimatedCard>
					<div className="card py-10 md:px-6 px-5 w-full h-full">
						<Image src={bg1} alt="bg1" className="bg-card" />

						<h1 className="text-lightest-slate font-semibold text-xl mb-3 z-10 relative">
							Get In Touch
						</h1>
						<p className="text-lightest-slate/60 text-[15px] leading-6 z-10 relative">
							I’m currently looking for new opportunities, my
							inbox is always open. Whether you have a question or
							just want to say hi, I’ll try my best to get back to
							you!
						</p>

						<Image
							src={hand}
							alt="hand"
							width={90}
							height={90}
							className="absolute bottom-2 right-8 z-10 duration-300 ease-linear move-leftRight md:block hidden"
						/>
					</div>
				</AnimatedCard>

				<AnimatedCard>
					<ContactCard />
				</AnimatedCard>
			</section>
		</main>
	);
}

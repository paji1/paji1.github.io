import React, { useState, useEffect } from "react";
import anime from "animejs";
import Image from "next/image";
import { logo } from "@/utils/assets";

type SplashScreen = {
	finishLoading: () => void;
};

const SplashScreen = ({ finishLoading }: SplashScreen) => {
	const [isMounted, setIsMounted] = useState(false);

	const animateLogo = () => {
		anime
			.timeline({
				complete: () => finishLoading(),
			})
			.add({
				targets: "#logo",
				scale: [0.5, 1],
				opacity: [0, 1],
				duration: 2000,
				easing: "easeInOutQuad",
			});
	};

	const animateCircle = () => {
		anime({
			targets: "#circle",
			rotate: "360deg",
			duration: 2000,
			loop: true,
			easing: "linear",
		});
	};

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10);
		animateLogo();
		animateCircle();
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div
			className={`flex h-screen items-center justify-center ${
				isMounted ? "visible" : "hidden"
			}`}
		>
			<div className="relative">
				<div
					id="circle"
					className="absolute w-24 h-24 border-4 border-green rounded-full"
					style={{
						clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 80%)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div style={{ position: "fixed" }}>
						<Image
							src={logo}
							alt="logo"
							className="w-12 h-12"
							id="logo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SplashScreen;

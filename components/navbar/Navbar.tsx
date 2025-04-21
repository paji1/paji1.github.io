"use client";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavContact from "./NavContact";
import { RobotoMono } from "@/utils/fonts";
import ToggleNav from "./ToggleNav";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	const handleToggle = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<nav
			className={`${RobotoMono.className} flex justify-between items-center pt-4 pb-2`}
		>
			<NavLogo />
			<NavLinks />
			<NavContact />
			<ToggleNav handleToggle={handleToggle} />

			<AnimatePresence mode="wait">
				{isActive && <MobileNav handleToggle={handleToggle} />}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;

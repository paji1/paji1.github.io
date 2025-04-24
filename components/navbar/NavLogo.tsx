import { logo } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
	return (
		<Link href="/" className="text-white select-none">
			<Image
				src={logo}
				alt="logo"
				width={40}
				height={40}
				className="object-cover hover:-rotate-12"
			/>
		</Link>
	);
};

export default NavLogo;

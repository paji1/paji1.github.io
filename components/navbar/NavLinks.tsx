import { navItems } from "@/utils/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const NavLinks = () => {
	const path = usePathname();

	return (
		<ul className="lg:flex hidden items-center gap-12 font-normal text-sm select-none">
			{navItems.map(({ title, href }, i) => (
				<li key={i}>
					<Link
						href={href}
						className={`${
							href === path
								? "text-lightest-slate"
								: "text-lightest-slate/60 hover:text-white"
						}  relative`}
					>
						{href === path && (
							<motion.span
								layoutId="underline"
								className="absolute left-0 top-full block h-[1px] w-full bg-lightest-slate/60 mt-1"
							/>
						)}
						<span className="text-green">0{i + 1}.</span> {title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;

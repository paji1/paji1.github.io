"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconDeviceLaptop } from "@tabler/icons-react";

const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
	{
	  name: "About",
	  link: "/about",
	  icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
	},
	{
	  name: "Works",
	  link: "/works",
	  icon: (
		<IconDeviceLaptop className="h-4 w-4 text-neutral-500 dark:text-white" />
	  ),
	},
	{
	  name: "Contact",
	  link: "/contact",
	  icon: (
		<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
	  ),
	},
  ];
const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  const finishLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={finishLoading} />
      ) : (
        <>
          <Navbar />
		  
		  <FloatingNav  navItems={navItems} />

          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default AppLayout;

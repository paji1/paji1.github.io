"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

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
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default AppLayout;

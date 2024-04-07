import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppLayout from "@/components/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taha Elmouhajir | Home",
  description:
    "Passionate Full Stack Web and software Developer. Transforming ideas into seamless digital experiences. Expertise in front-end design, back-end development, and software creation. Let's innovate together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark custom-container`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

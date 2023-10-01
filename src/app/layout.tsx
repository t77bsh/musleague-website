import "./globals.css";
import type { Metadata } from "next";
import { Alegreya, Inter } from "next/font/google";
import { CountProvider } from "@/context/WaitlistCountContext";
import mesh from "../../public/bg.svg";

export const alegreya = Alegreya({ subsets: ["latin"], style: "italic" });
export const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Musleague",
  description:
    "A matrimony app for Muslim professionals serious about mariage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " max-w-[1800px] mx-auto px-6 md:px-12 lg:px-32 bg-gradient-to-r from-[#FEFAEC] to-[#fcfbfa]"
        }
      >
        <CountProvider>{children}</CountProvider>
      </body>
    </html>
  );
}

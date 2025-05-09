import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FadhilWeb",
  description: "Fadhil Syahrian Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " mx-3 lg:mx-11 bg-blend-darken"}>
        <SpeedInsights />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

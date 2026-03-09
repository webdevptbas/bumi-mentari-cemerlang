import { Jaldi, Inter } from "next/font/google";
import HelveticaNowDisplay from "next/font/local";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import ResponsiveNavbar from "./responsiveHeader";

const jaldi = Jaldi({
  variable: "--font-jaldi",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const helveticaNowDisplay = HelveticaNowDisplay({
  src: [
    {
      path: "../../public/fonts/HelveticaNowDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-helveticaNowDisplay",
});

export const metadata = {
  title: "Welcome to Bumi Mentari Cemerlang",
  description: "Bumi Mentari Cemerlang where we have retail called Comum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNowDisplay.variable} ${jaldi.variable} ${inter.variable} antialiased`}
      >
        <ResponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

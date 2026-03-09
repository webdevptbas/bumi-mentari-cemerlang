"use client";

import Navbar from "@/component/Navbar";
import MobileNavbar from "@/component/MobileNavbar";
import useIsMobile from "@/util/useIsMobile";

export default function ResponsiveNavbar() {
  const isMobile = useIsMobile();

  return <>{isMobile ? <MobileNavbar /> : <Navbar />}</>;
}

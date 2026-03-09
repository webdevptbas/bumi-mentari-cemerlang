"use client";

import { navbarData } from "@/app/item";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const seaNavbar = pathname === "/ignite";

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-md"
      style={
        seaNavbar
          ? { background: "var(--gradient-sea)" }
          : { background: "var(--gradient-sun)" }
      }
    >
      <div className="w-full flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={navbarData.logo}
            alt="BMC Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Menu Items */}
        <ul
          className={`flex gap-10 font-medium ${
            seaNavbar ? "text-fff" : "text-000"
          }`}
        >
          {navbarData.menu.map((item, idx) => {
            const isActive = pathname === item.href;
            const activeGradientStyle = isActive
              ? {
                  background: seaNavbar
                    ? "var(--gradient-sun)"
                    : "var(--gradient-coffee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : {};
            return (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`hover:text-(--color-ffa) duration-200 
                    ${isActive ? "text-8a5 font-bold" : ""}
                  `}
                  style={activeGradientStyle}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

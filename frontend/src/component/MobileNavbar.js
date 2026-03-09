"use client";

import { navbarData } from "@/app/item";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const seaNavbar = pathname === "/ignite";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 z-50 w-screen overflow-x-hidden"
        style={
          seaNavbar
            ? { background: "var(--gradient-sea)" }
            : { background: "var(--gradient-sun)" }
        }
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src={navbarData.logo}
              alt="BMC Logo"
              width={100}
              height={40}
            />
          </Link>

          <button onClick={() => setMenuOpen(true)}>
            <FaBars className="text-000 text-md" />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 z-999
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={
          seaNavbar
            ? { background: "var(--gradient-sea)" }
            : { background: "var(--gradient-sun)" }
        }
      >
        <div
          className={`flex justify-between items-center px-4 py-4 border-b ${
            seaNavbar ? "border-blue" : "border-ffe"
          }`}
        >
          <span
            className={`text-[14px] font-bold tracking-widest ${
              seaNavbar ? "text-fff" : "text-000"
            }`}
          >
            Menu
          </span>
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-000 text-xl" />
          </button>
        </div>

        <nav className="flex flex-col gap-8 px-4 py-6 bg-212 text-fff text-[14px] h-full">
          {navbarData.menu.map((item, idx) => {
            const isActive = pathname === item.href;
            const activeGradientStyle = isActive
              ? {
                  background: seaNavbar
                    ? "var(--gradient-sea)"
                    : "var(--gradient-sun)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : {};
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-(--color-ffa) duration-200 ${
                  isActive ? "text-ffa" : ""
                }`}
                style={activeGradientStyle}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

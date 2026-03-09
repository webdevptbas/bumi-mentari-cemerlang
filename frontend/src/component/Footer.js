import BmcFooter from "@/images/bmc.png";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-[#141414] pt-6 xl:pt-10 pb-4 ">
        <nav className="w-full bottom-0 left-0 z-50 flex flex-col xl:flex-row">
          <div className="w-full flex flex-col items-left justify-end gap-2 px-6 xl:px-10 py-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src={BmcFooter}
                alt="BMC Logo"
                width={80}
                height={20}
                className="object-contain"
              />
            </Link>
            <h5 className="text-lg">
              <span className="font-bold">BMC </span>
              <span className="px-2">|</span> Bumi Mentari Cemerlang
            </h5>
          </div>
          <div className="flex justify-between gap-10 text-primary-1a1 px-6 xl:px-10 py-4 md:max-w-fit md:justify-end">
            <div className="w-full">
              <p className="font-medium text-sm xl:text-base">CONTACT US</p>
              <div className="flex flex-col text-sm font-normal xl:text-base">
                <span className="flex items-center gap-5 py-1 border-transparent">
                  <FaPhone />
                  (021) 3889 3049
                </span>
                <span className="flex items-center gap-5 py-1 border-transparent">
                  <MdOutlineEmail />
                  bumimentaricemerlang@gmail.com
                </span>
                <span className="flex items-center gap-5 py-1 border-transparent">
                  <FaInstagram />
                  @lifeatbmc
                </span>
              </div>
            </div>
          </div>
        </nav>
        <hr className="bg-ccc h-px w-[95vw] flex place-self-center" />
        <p className="mt-4 mb-4 place-self-center text-sm xl:text-base text-fff sm:mb-0">
          &copy;{new Date().getFullYear()}
          <span className="font-extralight tracking-widest">
            {" "}
            Bumi Mentari Cemerlang. All rights reserved.
          </span>
        </p>
      </div>
    </>
  );
}

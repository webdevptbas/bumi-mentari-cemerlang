"use client";

import Image from "next/image";
import { storesItem } from "./items";
import { StoreLocationComponent } from "./StoreLocation";
import dekstopBg from "@/images/store.webp";
import smallBg from "@/images/store.jpg";
import useIsMobile from "@/util/useIsMobile";

export default function Store() {
  const isMobile = useIsMobile();

  return (
    <>
      <main className="h-full items-center justify-center mt-10 xl:mt-20 cursor-default">
        <div className="relative overflow-hidden h-[25vh] xl:h-[35vh]">
          {/* Background */}
          <Image
            src={isMobile ? smallBg : dekstopBg}
            alt="Store background"
            fill
            className="object-cover -z-10"
            priority
          />

          {/* Overlay (optional, improves readability) */}
          <div className="absolute inset-0 bg-black/60 -z-9" />

          {/* Content */}
          <div className="flex flex-col z-50 text-fff py-20 h-full justify-center items-center">
            <h1
              className="text-center font-bold text-2xl xl:text-3xl text-ffe w-fit"
              style={{
                background: "var(--gradient-sun)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              WELCOME TO COMUM
            </h1>
            <h5 className="text-center text-sm xl:text-xl italic">
              A destination for those who stay active not just for performance,{" "}
              <br />
              but for identity, style, and community
            </h5>
          </div>
        </div>

        {storesItem.map((store, index) => (
          <StoreLocationComponent
            key={index}
            title={store.title}
            address={store.address}
            postCode={store.postCode}
            schedules={store.schedules}
            telp={store.telp}
            mapSrc={store.mapSrc}
            mapTitle={store.mapTitle}
            photos={store.photos}
            inverted={store.inverted}
          />
        ))}
      </main>
    </>
  );
}

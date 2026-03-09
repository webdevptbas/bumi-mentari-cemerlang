"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { slides } from "./carouselItem";
import Link from "next/link";

export default function Carousel() {
  return (
    <div className="relative w-full h-[50vh] xl:h-screen mt-14 xl:mt-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              {/* Background image */}
              <Image
                src={slide.bg}
                alt={slide.alt}
                fill
                priority={idx === 0} // preload first slide
                className={`${slide.styleBg} object-cover`}
              />

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-start px-20 xl:px-30 cursor-default">
                <h5
                  className={`${slide.styleTag} w-full text-[16px] font-jaldi font-regular text-white lg:text-lg xl:text-2xl`}
                >
                  {slide.tag}
                </h5>

                {slide.logo && (
                  <div className="flex justify-center w-full py-5">
                    <Image
                      src={slide.logo}
                      alt={slide.alt}
                      height={250}
                      width={350}
                      className="object-contain"
                    />
                  </div>
                )}

                <h1
                  style={{
                    background: "var(--gradient-sun)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className={`${slide.styleTitle} h-fit text-[30px] font-jaldi font-bold md:text-[40px] lg:text-[50px] xl:text-[80px] xl:leading-20 xl:py-2`}
                >
                  {slide.title}
                </h1>

                {slide.url ? (
                  <Link href={slide.url} className="w-full">
                    <p
                      className={`${slide.styleDesc} w-full text-[16px] font-jaldi font-regular text-white lg:text-lg xl:text-2xl hover:text-ffa italic duration-200`}
                    >
                      {slide.desc}
                    </p>
                  </Link>
                ) : (
                  <p
                    className={`${slide.styleDesc} w-full text-[16px] font-jaldi font-regular text-white lg:text-lg xl:text-2xl`}
                  >
                    {slide.desc}
                  </p>
                )}
              </div>

              {slide.logoSecondary && (
                <div className="absolute bottom-2 right-10 py-5">
                  <Image
                    src={slide.logoSecondary}
                    alt={slide.alt}
                    height={250}
                    width={150}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom nav + pagination */}
        <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-secondary-fff">
          <FaCaretLeft
            className="fill-secondary-fff/50 text-6xl"
            height={"50px"}
          />
        </div>
        <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-secondary-fff">
          <FaCaretRight
            className="fill-secondary-fff/50 text-6xl"
            height={"50px"}
          />
        </div>
      </Swiper>
    </div>
  );
}

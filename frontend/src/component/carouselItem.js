import image1 from "../images/carousel-images/bg.png";
import image2 from "../images/carousel-images/hero1.webp";
import image3 from "../images/carousel-images/hero2.webp";
import newBmcIcon from "../images/white_bmc_logo.png";
import slide1 from "../images/carousel-images/slide1.png";
import people from "@/images/image1.webp";

export const slides = [
  {
    bg: slide1,
    alt: "More than just a communal space",
    tag: "Welcome to",
    title: "BUMI MENTARI CEMERLANG",
    desc: "Shine in Every Move",
    logoSecondary: null,
    styleBg: null,
    styleTag: "text-center xl:text-[60px]",
    styleTitle:
      "text-center xl:whitespace-nowrap font-semibold leading-tight w-full",
    styleDesc: "text-center xl:text-[40px]",
    url: null,
  },
  {
    bg: people,
    alt: "Bringing the power of the sun to every moment of your active life",
    tag: "",
    title: "Shine in Every Move",
    desc: "Bringing the power of the sun to every moment of your active life",
    logoSecondary: null,
    styleBg: "object-[50%_0%] xl:object-[0%_35%]",
    styleTag: "text-center",
    styleTitle: "text-center leading-none w-[60%] place-self-center",
    styleDesc: "text-center",
    url: null,
  },
  {
    bg: image2,
    alt: "More than just a communal space",
    tag: "",
    title: "#IgniteYourPotential",
    desc: "Read More",
    logoSecondary: null,
    styleBg: null,
    styleTag: "text-center",
    styleTitle: "text-center w-full",
    styleDesc: "text-center",
    url: "/about",
  },
  {
    bg: image1,
    alt: "Bumi Mentari Cemerlang",
    tag: null,
    title: null,
    desc: null,
    logo: newBmcIcon,
    logoSecondary: null,
    styleBg: null,
    styleTag: null,
    styleTitle: null,
    styleDesc: null,
    url: null,
  },
];

import Image from "next/image";
import aboutImage from "../images/about-img.webp";

export default function AboutHome() {
  return (
    <>
      <div className="flex flex-col px-6 justify-between gap-x-6 mt-10 xl:flex-row">
        <div className="w-full xl:w-1/2 relative">
          <Image
            src={aboutImage}
            alt="Bumi Mentari Cemerlang"
            fill
            className="object-cover"
          />
        </div>
        <div className="xl:w-1/2 h-full text-justify">
          <h2
            className="text-4xl font-bold text-(--color-ffe) mt-10 xl:mt-0 mb-6 w-fit"
            style={{
              background: "var(--gradient-sun)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Us
          </h2>
          <p>
            <span
              className="text-(--color-ffe) font-bold h-fit"
              style={{
                background: "var(--gradient-sun)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bumi Mentari Cemerlang (BMC){" "}
            </span>
            is a premium active-lifestyle hub centered around cycling and padel,
            dedicated to elevating performance, craftsmanship, and meaningful
            human connection. Established in 2012, BMC delivers a refined
            ecosystem through curated high-end products, expert guidance,
            product education, and after-sales support, ensuring every customer
            touchpoint reflects precision, authenticity, and professionalism.
            <br />
            <br />
            Beyond retail, BMC is driven by community at its core: a space where
            enthusiasts connect, learn, and grow together, sharing passion,
            knowledge, and an active way of living. By nurturing an engaged and
            knowledgeable community while upholding excellence in brand
            representation, BMC positions itself as a trusted long-term partner
            for premium brands and discerning consumers, strengthening both
            lifestyle impact and market value.
          </p>
          <h2
            className="text-4xl font-bold text-(--color-ffe) mt-6 mb-6 w-fit"
            style={{
              background: "var(--gradient-sun)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Location
          </h2>
          <p>
            Ruko Bumi Permata Indah Blok R1 No. 18 <br />
            Jl. Raden Saleh No. 18 RT. 001 RW. 012 <br />
            Karang Mulya - Karang Tengah
            <br />
            Tangerang, Banten - 15157
            <br />
            Telp. (021) 3889 3049
            <br />
            Email: bumimentaricemerlang@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}

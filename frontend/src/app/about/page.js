import { missionItems } from "./missionItem";
import { PiStarFourFill } from "react-icons/pi";

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="w-full pt-30 xl:pt-36 flex flex-col items-center">
          <h1
            className="text-center font-bold text-3xl text-(--color-ffe) w-fit"
            style={{
              background: "var(--gradient-sun)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT US
          </h1>
          <p className="text-justify py-5 px-6 xl:px-60">
            <span
              className="text-(--color-ffe) font-regular"
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
        </div>
        <div className="mt-10 xl:mt-20 flex flex-col xl:flex-row w-full justify-between text-000 grow">
          <div className="flex flex-col bg-(--color-ffe) w-screen xl:w-1/2 p-6">
            <h1 className="text-center font-bold text-3xl" >VISION</h1>
            <p className="flex italic font-bold text-xlu xl:text-3xl items-center p-0 py-6 xl:px-55 grow">
              To become Indonesia’s leading sports and lifestyle company,
              inspiring customers to live active, healthy, and fulfilling lives.
            </p>
          </div>
          <div className="flex flex-col bg-white w-screen xl:w-1/2 p-10">
            <h1 className="text-center font-bold text-3xl">MISSION</h1>
            <div className="flex flex-col items-center px-0 pt-6 md:px-35 xl:px-45 grow justify-center">
              {missionItems.map((item) => (
                <>
                  <div className="flex items-center gap-5 justify-start w-full">
                    <PiStarFourFill size={15} />
                    <h5 className="font-bold text-xl xl:text-2xl italic text-left w-full">
                      {item.title}
                    </h5>
                  </div>
                  <p className="mb-5 text-left w-full">{item.subtitle}</p>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

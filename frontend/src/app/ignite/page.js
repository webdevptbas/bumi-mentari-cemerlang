import bg from "@/images/carousel-images/bg.png";
import igniteIcon from "@/images/icons/IGNITE.png";
import Image from "next/image";

const items = [
  {
    label: "Integrity",
    value: "We act honestly, transparently, and ethically in every decision.",
  },
  {
    label: "Growth",
    value: "We commit to continuous learning and development.",
  },
  {
    label: "Network",
    value: "We build strong, collaborative relationships for shared success.",
  },
  {
    label: "Innovation",
    value: "We embrace creativity to improve efficiency & quality",
  },
  {
    label: "Teamwork",
    value: "We work together with respect to achieve common goals.",
  },
  {
    label: "Excellence",
    value: "We strive to exceed expectations with outstanding results.",
  },
];

export default function Ignite() {
  return (
    <>
      <main className="min-h-fit items-center justify-center xl:mt-18 pb-32 px-6 cursor-default">
        <Image
          src={bg}
          alt="Background"
          fill
          priority
          className="object-cover -z-10 xl:mt-18"
        />
        <h3 className="absolute font-bold text-xl xl:text-3xl top-26">
          Core Value
        </h3>
        <div className="mt-50">
          <Image
            src={igniteIcon}
            alt="Ignite"
            className="place-self-center m-10 xl:m-20 px-10 xl:p-0 mt-30"
          />
          <div className="grid grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-3 xl:gap-10 mt-20 w-full xl:w-1/2 place-self-center">
            {items.map((item) => (
              <>
                <div
                  className="bg-(--color-blue) text-fff rounded-2xl px-2 py-4 h-full xl:p-6 xl:h-45 w-full place-self-center flex flex-col hover:scale-115 transition duration-300 items-center"
                  style={{ background: "var(--gradient-sea)" }}
                >
                  <h3
                    style={{
                      background: "var(--gradient-sun)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    className="flex text-center xl:items-end justify-center w-fit h-fit xl:h-1/2 font-bold text-2xl xl:text-[36px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                  >
                    {item.label}
                  </h3>
                  <h5 className="flex text-center xl:items-start justify-center h-1/2 font-regular text-[12px] tracking-wide">
                    {item.value}
                  </h5>
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

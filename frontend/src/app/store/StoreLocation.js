import Image from "next/image";
import { FaLocationDot, FaClock, FaPhone } from "react-icons/fa6";

export const StoreLocationComponent = ({
  title,
  address,
  postCode,
  schedules = [],
  photos = [],
  telp,
  mapSrc,
  mapTitle,
  inverted,
}) => {
  const bigPhoto = photos.find((p) => p.isBig);
  const smallPhotos = photos.filter((p) => !p.isBig);
  console.log(photos);

  return (
    <div
      className={`flex justify-between px-6 xl:px-10 py-6 xl:py-20 gap-10 flex-col-reverse xl:flex-row ${
        inverted ? "flex-col-reverse xl:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col gap-5 flex-1">
        {bigPhoto && (
          <div className="flex-1 basis-1/2 max-w-full">
            <Image src={bigPhoto.src} alt={bigPhoto.alt} />
          </div>
        )}
        <div className="flex-1 flex flex-row gap-5">
          {smallPhotos.map((small, index) => (
            <div
              className="w-full h-fit aspect-square overflow-hidden"
              key={index}
            >
              <Image
                className="w-full h-full object-cover block"
                src={small.src}
                alt={small.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <div className="w-full">
          <h1
            className="font-bold text-2xl xl:text-3xl text-(--color-ffe) w-fit"
            style={{
              background: "var(--gradient-sun)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </h1>
          <div className="text-justify py-5 flex flex-col gap-x-10 text-base xl:text-xl cursor-default w-full">
            <p
              style={{
                display: "flex",
                textAlign: "justify",
                gap: "20px",
              }}
            >
              <FaLocationDot />
              {address} - {postCode}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <FaClock style={{ marginTop: 4 }} />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                {schedules.map((s, index) => (
                  <div key={index} style={{ display: "flex", gap: "20px" }}>
                    <span>
                      {s.dayOpen}, {s.timeOpen}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {telp ? (
              <p
                style={{
                  display: "flex",
                  textAlign: "justify",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <FaPhone />
                {telp}
              </p>
            ) : (
              <p />
            )}
          </div>
        </div>

        <div className="grow border [border-image:var(--gradient-sun)_1] p-5 flex">
          <iframe
            title={mapTitle}
            src={mapSrc}
            style={{ width: "100%", border: "none" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

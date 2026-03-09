import bigPhotoPangpol from "@/images/stores/store-pangpol.webp";
import smallPangpol1 from "@/images/stores/small-pangpol1.webp";
import smallPangpol2 from "@/images/stores/small-pangpol2.webp";
import bigPhotoAlsut from "@/images/stores/store-alsut.webp";
import smallAlsut1 from "@/images/stores/small-alsut1.webp";
import smallAlsut2 from "@/images/stores/small-alsut2.webp";

export const storesItem = [
  {
    title: "Comum - Panglima Polim",
    address: (
      <>
        Jl. Panglima Polim IX No. 4 RT. 001 RW. 007 Melawai - Kebayoran Baru
        <br />
        Jakarta Selatan, DKI Jakarta
      </>
    ),
    postCode: 12160,
    schedules: [{ dayOpen: "Everyday", timeOpen: "07.00 - 18.00" }],
    telp: "0822-1111-0837",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.105207051365!2d106.7985484!3d-6.2498658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1990f509bed%3A0x7aeeddf09f65de96!2sComum%20Bike%20and%20Coffee!5e0!3m2!1sen!2sid!4v1754383355410!5m2!1sen!2sid",
    mapTitle: "Comum Bike and Coffee - Panglima Polim",
    photos: [
      {
        src: bigPhotoPangpol,
        alt: "Comum Panglima Polim",
        isBig: true,
      },
      {
        src: smallPangpol1,
        alt: "Comum Panglima Polim",
      },
      {
        src: smallPangpol2,
        alt: "Comum Panglima Polim",
      },
    ],
    inverted: false,
  },
  {
    title: "Comum - Alam Sutera",
    address: (
      <>
        Ruko Palmyra Square Unit 25 A No. 6 RT. 002 RW. 014 Kunciran - Pinang
        <br />
        Kota Tangerang, Banten
      </>
    ),
    postCode: 15325,
    schedules: [{ dayOpen: "Everyday", timeOpen: "09.00 - 20.00" }],
    telp: "0821-2503-9938",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.256882087315!2d106.6600425!3d-6.2298260999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb2d9101b56b%3A0x784e10de74dbd3!2sSantini%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1754383505843!5m2!1sen!2sid",
    mapTitle: "Comum Bike and Coffee - Alam Sutera",
    photos: [
      {
        src: bigPhotoAlsut,
        alt: "Comum Alam Sutera",
        isBig: true,
      },
      {
        src: smallAlsut1,
        alt: "Comum Alam Sutera",
      },
      {
        src: smallAlsut2,
        alt: "Comum Alam Sutera",
      },
    ],
    inverted: true,
  },
];

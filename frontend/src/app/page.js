import AboutHome from "@/component/AboutHome";
import Carousel from "@/component/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <main className="h-full items-center justify-center mb-10 xl:mb-30">
        <AboutHome />
      </main>
    </>
  );
}

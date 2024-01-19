import BestSellers from "./components/BestSellers";
import Header from "./components/Header";

export default async function Home() {
  return (
    <div className=" text-brown dark:text-white dark:bg-[#3F2E3E] bg-cheeseCake">
      <Header />
      <div className="px-4 pb-10">
        <p className="mt-9 lg:text-3xl text-sm md:font-bold ">
          Your audio storage should look as good as your music sounds. Our
          vision is to bring renewed quality and soul to furniture design,
          creating products that provide generational value and are loved for
          both the solutions they create and the experiences they enable.
          <span className=" font-bold border-b">Learn more</span>
        </p>
        <BestSellers />
      </div>
    </div>
  );
}

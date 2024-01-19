import header from "@/assets/asset 0.jpeg";
import Image from "next/image";
import Svg from "./Svg";

const Header = () => {
  return (
    <section className=" sm:h-screen relative dark:text-[#420b13] text-[#000]">
      <div className="grid grid-cols-1  lg:grid-cols-2 h-full items-start ">
        <Svg />
        <div className="lg:order-last h-full">
          <Image
            src={header}
            className="h-[50vh] lg:h-full object-cover"
            alt="header"
            priority
          />
        </div>
        <div className="w-full lg:h-full h-fit sm:h-[50vh] flex flex-col ">
          <div className="flex lg:items-end pt-20 lg:pt-0 justify-between lg:h-full">
            <div className="grid grid-cols-2 w-full   items-start  pl-4  leading-10">
              <h1 className="  font-bold text-sm lg:max-w-[120px] max-w-[150px]">
                Design-driven audio & storage.
              </h1>

              <div className="pr-3 lg:max-w-[310px] max-w-sm sm:max-w-4xl lg:pl-0  pl-0 line-clamp-4 sm:line-clamp-none ">
                <p className=" font-normal   sm:text-base text-sm">
                  Our vinyl storage & audio collections are designed to fit
                  comfortably in your home like real furniture. Built by hand
                  with sustainable materials; wearing in, never wearing out.
                </p>
                <button className="hidden lg:block font-bold text-2xl mt-2 border-b pb-0.5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="pl-4 mt-7 self-baseline">
            <button className=" lg:hidden font-bold text-2xl mt-2 border-b pb-0.5">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

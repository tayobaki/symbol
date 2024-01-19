"use client";

import { navLinks } from "@/constants/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useStateContext } from "@/context/theme";
import Cart from "./Cart";

const NavBar = () => {
  const [scroll, setScroll] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const [active, setActive] = useState();
  const { handleThemeSwitch, qty, showCart, setShowCart } = useStateContext();

  useEffect(() => {
    const updateScrollY = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollY);
  }, []);

  return (
    <div
      className={`${
        scroll
          ? "bg-[#fffcda] dark:bg-[#3F2E3E]"
          : "bg-transparent dark:bg-transparent"
      } fixed top-0 bg-[#fffcda]  dark:text-white text-[#3F2E3E] font-bold px-4 flex items-center justify-between py-6 w-full z-50 text-sm`}
    >
      {/* DESKTOP NAVIGATION */}
      <nav className=" hidden lg:grid grid-cols-12 w-full items-center">
        <Link href={"/"} className="">
          <svg
            className={`${
              scroll ? " fill-current" : " fill-transparent"
            }  w-20 h-full`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1400 400"
            aria-labelledby="logo-header"
          >
            <path d="M387.996 116.686L347.728 173.288C342.278 180.855 338.04 188.422 334.104 195.989L332.741 195.535C333.649 189.179 333.649 182.52 333.649 169.353V116.686H248.42V319.485L184.688 400H283.541L486.85 116.686H387.996Z"></path>
            <path d="M236.159 240.182C236.159 217.934 227.984 195.687 211.938 178.131L145.934 106.092C141.09 100.795 135.792 95.4976 129.888 91.1087L130.342 90.2006C136.7 91.1087 141.544 91.1087 150.627 91.1087H234.948V0.454102H133.824C76.1462 0.454102 40.4195 47.3705 40.4195 94.4382C40.4195 116.686 48.5943 138.933 64.641 156.489L130.493 228.528C135.337 233.825 140.636 239.122 146.54 243.511L146.086 244.419C139.727 243.511 134.883 243.511 125.8 243.511H0V334.014H142.604C200.281 334.166 236.159 287.098 236.159 240.182Z"></path>
            <path d="M683.499 107C659.429 107 638.84 117.594 622.945 133.031C607.201 117.594 586.613 107 562.392 107C505.168 107 457.785 153.462 457.785 210.67V334.166H545.891V210.67C545.891 201.892 553.611 194.173 562.392 194.173C571.626 194.173 578.892 201.892 578.892 210.67V334.166H588.581H657.309H666.998V210.67C666.998 201.892 674.718 194.173 683.499 194.173C692.733 194.173 700 201.892 700 210.67V334.166H788.105V210.67C788.105 153.462 741.63 107 683.499 107Z"></path>
            <path d="M1400 0.454102H1314.77V334.014H1400V0.454102Z"></path>
            <path d="M942.669 253.197C926.169 253.197 912.695 239.576 912.695 223.231C912.695 206.735 926.32 193.265 942.669 193.265C959.019 193.265 972.643 206.886 972.643 223.231C972.795 239.728 959.17 253.197 942.669 253.197ZM950.541 108.059C930.407 108.059 908.305 112.751 892.561 126.977L890.896 126.523C892.41 120.167 892.41 111.994 892.41 107.605L891.956 0.605469H806.727V334.166H891.956V329.323C891.956 324.48 891.956 322.513 891.047 317.67L892.561 316.761V316.459C906.943 331.442 925.866 338.555 950.693 338.555C1008.82 338.555 1058.18 293.001 1058.18 223.383C1058.02 159.819 1008.67 108.059 950.541 108.059Z"></path>
            <path d="M1185.34 253.197C1168.84 253.197 1155.36 239.576 1155.36 223.231C1155.36 206.735 1168.99 193.265 1185.34 193.265C1202.29 193.265 1215.31 206.886 1215.31 223.231C1215.46 239.728 1202.29 253.197 1185.34 253.197ZM1185.34 108.059C1121.91 108.059 1070.13 159.818 1070.13 223.231C1070.13 286.644 1121.91 338.403 1185.34 338.403C1248.77 338.403 1300.54 286.644 1300.54 223.231C1300.69 159.818 1248.92 108.059 1185.34 108.059Z"></path>
          </svg>
        </Link>

        <ul className=" space-x-7 col-start-4 col-span-5  items-center flex ">
          {navLinks.map((nav) => (
            <div
              className={`${
                active === nav.title
                  ? " text-red dark:text-black"
                  : " text-brown dark:text-white"
              } cursor-pointer`}
            >
              <p
                onClick={() => setActive(nav.title)}
                key={nav.title}
                href={nav.href}
              >
                {nav.title}
              </p>
            </div>
          ))}
        </ul>
        <span
          onClick={() => setShowCart(true)}
          className="  col-start-11  cursor-pointer"
        >
          Cart({qty})
        </span>
        {showCart && <Cart />}

        <div
          onClick={handleThemeSwitch}
          className={`${
            scroll ? " block" : "hidden"
          } w-5 h-5 cursor-pointer col-start-12 ml-3 bg-[#420b13] rounded-full`}
        />
        {/* {`${
              scroll ? " fill-current" : " fill-transparent"
            }  w-20 h-full`} */}
      </nav>

      {/* MOBILE NAVIGATION */}
      <nav className="flex items-center justify-between w-full lg:hidden">
        <span className=" cursor-pointer">Menu</span>

        <svg
          className={`${
            scroll ? " fill-current" : " fill-transparent"
          }  w-20 h-full`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 400"
          aria-labelledby="logo-header"
        >
          <path d="M387.996 116.686L347.728 173.288C342.278 180.855 338.04 188.422 334.104 195.989L332.741 195.535C333.649 189.179 333.649 182.52 333.649 169.353V116.686H248.42V319.485L184.688 400H283.541L486.85 116.686H387.996Z"></path>
          <path d="M236.159 240.182C236.159 217.934 227.984 195.687 211.938 178.131L145.934 106.092C141.09 100.795 135.792 95.4976 129.888 91.1087L130.342 90.2006C136.7 91.1087 141.544 91.1087 150.627 91.1087H234.948V0.454102H133.824C76.1462 0.454102 40.4195 47.3705 40.4195 94.4382C40.4195 116.686 48.5943 138.933 64.641 156.489L130.493 228.528C135.337 233.825 140.636 239.122 146.54 243.511L146.086 244.419C139.727 243.511 134.883 243.511 125.8 243.511H0V334.014H142.604C200.281 334.166 236.159 287.098 236.159 240.182Z"></path>
          <path d="M683.499 107C659.429 107 638.84 117.594 622.945 133.031C607.201 117.594 586.613 107 562.392 107C505.168 107 457.785 153.462 457.785 210.67V334.166H545.891V210.67C545.891 201.892 553.611 194.173 562.392 194.173C571.626 194.173 578.892 201.892 578.892 210.67V334.166H588.581H657.309H666.998V210.67C666.998 201.892 674.718 194.173 683.499 194.173C692.733 194.173 700 201.892 700 210.67V334.166H788.105V210.67C788.105 153.462 741.63 107 683.499 107Z"></path>
          <path d="M1400 0.454102H1314.77V334.014H1400V0.454102Z"></path>
          <path d="M942.669 253.197C926.169 253.197 912.695 239.576 912.695 223.231C912.695 206.735 926.32 193.265 942.669 193.265C959.019 193.265 972.643 206.886 972.643 223.231C972.795 239.728 959.17 253.197 942.669 253.197ZM950.541 108.059C930.407 108.059 908.305 112.751 892.561 126.977L890.896 126.523C892.41 120.167 892.41 111.994 892.41 107.605L891.956 0.605469H806.727V334.166H891.956V329.323C891.956 324.48 891.956 322.513 891.047 317.67L892.561 316.761V316.459C906.943 331.442 925.866 338.555 950.693 338.555C1008.82 338.555 1058.18 293.001 1058.18 223.383C1058.02 159.819 1008.67 108.059 950.541 108.059Z"></path>
          <path d="M1185.34 253.197C1168.84 253.197 1155.36 239.576 1155.36 223.231C1155.36 206.735 1168.99 193.265 1185.34 193.265C1202.29 193.265 1215.31 206.886 1215.31 223.231C1215.46 239.728 1202.29 253.197 1185.34 253.197ZM1185.34 108.059C1121.91 108.059 1070.13 159.818 1070.13 223.231C1070.13 286.644 1121.91 338.403 1185.34 338.403C1248.77 338.403 1300.54 286.644 1300.54 223.231C1300.69 159.818 1248.92 108.059 1185.34 108.059Z"></path>
        </svg>

        <span onClick={() => setShowCart(true)} className=" cursor-pointer">
          Cart({qty})
        </span>
        {showCart && <Cart />}
      </nav>
    </div>
  );
};

export default NavBar;

"use client";

import { useState, useEffect } from "react";
import { getSingleProduct } from "@/libs";
import Image from "next/image";
import { useStateContext } from "@/context/theme";
import { DotLoader } from "react-spinners";

const ProductPage = ({ params: { slug } }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const product = getSingleProduct(slug);
  const { addToCart, qty, setShowCart } = useStateContext();

  return (
    <div className=" px-4 pt-20 flex items-center justify-center text-red-500 bg-[#fffcda] min-h-screen">
      {loading ? (
        <div className=" flex items-center justify-center w-full  h-full">
          <DotLoader
            color="#36d7b7"
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="aspect-square relative w-full">
            <Image
              src={product.image}
              fill
              className=" object-cover"
              alt={product.title}
            />
          </div>
          <div className=" space-y-5">
            <h1 className=" lg:text-6xl text-4xl font-bold">{product.title}</h1>
            <div className="grid grid-cols-2 pt-5">
              <div className=" lg:col-start-2 col-span-2">
                <p className=" text-xs sm:text-base ">
                  The Aero 51" LP Console features Symbol's proprietary LP
                  swivel bin holding up to 110 LPs and an adjustable shelf.
                  Handmade in the USA from sustainably-harvested solidwoods.
                </p>
                <div className=" mt-4 text-xs sm:text-base">
                  <div className="border-y  flex items-center justify-between border-red py-5">
                    <span>Cabinet Fish</span>
                    <span className=" font-semibold">Maple - Jet Black</span>
                  </div>
                  <div className="flex items-center justify-between border-red-300 py-5">
                    <span>Front Fish</span>
                    <span className=" font-semibold">
                      Maple - Glacier White
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => {
                    addToCart(product, qty);
                    setShowCart(true);
                  }}
                  className="w-full flex-1 mt-3 bg-red cursor-pointer rounded-3xl justify-center hover:bg-[#fffcda] duration-300 border group  flex items-center"
                >
                  <button className="flex items-center justify-center font-semibold group-hover:text-red-400 text-[#c9c16a] gap-5 rounded-3xl py-2 ">
                    <span>Add To Cart</span>
                    <span className=" opacity-60">{product.price}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

"use client";

import { useState, useEffect } from "react";
import { productData } from "@/constants/data";
import { getProducts, getSingleProduct } from "@/libs";
import Image from "next/image";
import { useStateContext } from "@/context/theme";
import { Skeleton } from "@mui/material";

const ProductPage = ({ params: { slug } }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const product = getSingleProduct(slug);
  const { addToCart, qty, showCart, cartItems, setCartItems, setShowCart } =
    useStateContext();

  return (
    <div className="mt-20 px-4 pb-32 text-red bg-cheeseCake">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="aspect-square relative w-full">
          {loading ? (
            <Skeleton
              animation="wave"
              width={380}
              height={560}
              className=" lg:flex items-center ml-56 hidden lg:ml-32 justify-center"
            />
          ) : (
            <Image
              src={product.image}
              fill
              className=" object-cover"
              alt={product.title}
            />
          )}
        </div>
        <div className=" space-y-5">
          <h1 className=" lg:text-6xl text-4xl font-bold">{product.title}</h1>
          <div className="grid grid-cols-2 pt-5">
            <div className=" lg:col-start-2 col-span-2">
              <p className=" text-base">
                The Aero 51" LP Console features Symbol's proprietary LP swivel
                bin holding up to 110 LPs and an adjustable shelf. Handmade in
                the USA from sustainably-harvested solidwoods.
              </p>
              <div className=" mt-4">
                <div className="border-y flex items-center justify-between border-red py-5">
                  <span>Cabinet Fish</span>
                  <span className=" font-semibold">Maple - Jet Black</span>
                </div>
                <div className="flex items-center justify-between border-red py-5">
                  <span>Front Fish</span>
                  <span className=" font-semibold">Maple - Glacier White</span>
                </div>
              </div>
              <div
                onClick={() => {
                  addToCart(product, qty);
                  setShowCart(true)
                }}
                className="w-full flex-1 mt-3 bg-red cursor-pointer rounded-3xl justify-center hover:bg-cheeseCake duration-300 border group  flex items-center"
              >
                <button
                  className="flex items-center justify-center font-semibold group-hover:text-red text-cheeseCake gap-5 rounded-3xl py-2 "
                >
                  <span>Add To Cart</span>
                  <span className=" opacity-60">{product.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {showCart && <Cart />} */}
      </div>
    </div>
  );
};

export default ProductPage;

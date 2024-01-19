"use client";

import { useStateContext } from "@/context/theme";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { setShowCart, cartItems, qty, decQty, incQty } = useStateContext();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 1080, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        exit={{ opacity: 0, x: -1080 }}
        className="absolute right-0 text-blue overflow-y-scroll bg-white z-50 top-0 py-7 h-screen  px-6 font-light w-[85%]"
      >
        <div className="  ">
          <div className="flex items-center justify-between">
            {cartItems.length < 1 && (
              <h1 className=" whitespace-nowrap">Your cart is empty</h1>
            )}
            <span
              onClick={() => setShowCart(false)}
              className=" flex justify-end w-full cursor-pointer hover:font-medium duration-200"
            >
              Close
            </span>
          </div>

          <div className="   bg-white">
            {cartItems.length >= 1 &&
              cartItems.map((items) => (
                <div
                  key={items?.slug}
                  className="flex flex-col sm:flex-row sm:items-center justify-between items-start  h-full"
                >
                  <Image
                    width={300}
                    height={150}
                    alt={items?.title}
                    src={items?.image}
                  />
                  <div className="flex h-full items-center">
                    <div className=" font-medium space-y-1">
                      <h3>{items?.title}</h3>
                      <p>{items?.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className=" text-xl cursor-pointer" onClick={decQty}>
                      -
                    </span>
                    <div className="">{qty}</div>
                    <span className=" text-xl cursor-pointer" onClick={incQty}>
                      +
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;

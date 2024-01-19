"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(0);

  const incQty = () => {};

  const addToCart = (product, quantity) => {
    setQty((prevQty) => prevQty + 1);
    toast.success(`${qty} ${product.title} added`);

    const productInCart = cartItems.find((item) => item.slug === product.slug);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (productInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.slug === product.slug)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        else return { ...cartProduct };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        handleThemeSwitch,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        setQty,
        // incQty,
        addToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

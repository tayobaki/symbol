import { productData } from "@/constants/data";



export const getProducts = async () => {
  const res = productData;

  return res;
};


export const getSingleProduct = (slug) => {
  const product = productData.find((product) => product.slug === slug);

  return product;
};

import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/libs";

export default async function BestSellers() {
  const product = await getProducts();
  return (
    <section className="mt-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 items-center ">
        <div className="space-y-2 col-span-2 sm:col-span-1">
          <h1>Bestsellers</h1>

          <button className="bg-[#420b13] rounded-full text-[#fffcda] font-semibold px-5 py-2 flex text-xs items-center justify-center">
            Shop Bestsellers
          </button>
        </div>

        {product?.map((product) => (
          <div key={product.slug} className="">
            <Link
              href={`/product/${product.slug}`}
              key={product.slug}
              className=" flex-col hover:brightness-110 duration-200 flex items-center"
            >
              <Image
                src={product.image}
                alt={product.title}
                placeholder="blur"
                loading="lazy"
              />

              <div className=" text-base items-center">
                <div className=" font-bold text-center">
                  <h1 className="m-0 line-clamp-1">{product.title}</h1>
                  <p className=" font-light">from {product.price}</p>
                </div>
              </div>
            </Link>

            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

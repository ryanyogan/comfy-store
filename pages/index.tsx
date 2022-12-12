import StoreLayout from "layouts/Store";
import { companyName, description } from "lib/constants";
import { categories, products } from "lib/data";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2";

export default function Home() {
  return (
    <StoreLayout title={`Home | ${companyName}`}>
      <section data-testid="hero-section" className="relative w-full h-[560px]">
        <Image
          src="/assets/banner.jpeg"
          alt="Banner image"
          fill
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-4 py-12">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-3xl sm:text-5xl text-white text-center tracking-wide text-shadow max-w-md">
              {description}
            </h1>

            <Link
              href="/products"
              className="bg-red-600 text-white hover:bg-white hover:text-red-600 px-9 py-3 uppercase transition max-w-max"
            >
              Shop now
            </Link>
          </div>
        </div>
      </section>

      <section
        data-testid="categories-section"
        className="mt-16 container mx-auto px-4 space-y-12"
      >
        <div className="text-center">
          <h3 className="relative inline-block text-gray-700 text-2xl sm:text-3xl font-medium uppercase tracking-wide after:content-[''] after:w-1/2 after:h-[2px] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:mt-2 after:bg-red-600">
            Shop by category
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/categories/${category.slug}`}
              key={category.id}
              className="bg-gray-50 p-6 w-full h-full group"
            >
              <p className="font-medium text-lg sm:text-xl group-hover:text-red-600 transition">
                {category.name}
              </p>
              <p className="text-sm sm:text-normal text-gray-600">
                ({category.products.length} products)
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section
        data-testid="products-section"
        className="mt-24 container mx-auto px-4"
      >
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="relative inline-block text-gray-700 text-2xl sm:text-3xl font-medium uppercase tracking-wide after:content-[''] after:w-1/2 after:h-[2px] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:mt-2 after:bg-red-600">
              Trending
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.id}
                className="space-y-4 group"
              >
                <div className="relative aspect-square">
                  {product.images?.length > 0 && (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover object-center p-2"
                    />
                  )}

                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition" />

                  <div className="opacity-0 group-hover:opacity-100 flex space-x-4 absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/4 group-hover:translate-y-0 transition">
                    <button
                      onClick={() => null}
                      title="Add to cart"
                      className="bg-white hover:bg-red-600 hover:text-white shadow-lg flex items-center justify-center max-w-max rounded-full p-3 transition"
                    >
                      <HiOutlineShoppingBag className="shink-0 w-6 h-6" />
                    </button>
                    <button
                      onClick={() => null}
                      title="Add to favorite"
                      className="bg-white hover:bg-red-600 hover:text-white shadow-lg flex items-center justify-center max-w-max rounded-full p-3 transition"
                    >
                      <HiOutlineHeart className="shink-0 w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <p className="font-medium line-clamp-1 group-hover:text-red-600 transition">
                    {product.name}
                  </p>
                  <p className="text-gray-700">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/products"
            className="bg-black hover:bg-red-600 text-white px-9 py-3 uppercase text-sm transition"
          >
            All products
          </Link>
        </div>
      </section>
    </StoreLayout>
  );
}

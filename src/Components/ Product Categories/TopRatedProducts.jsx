import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    fetch("https://bulka-bazar-server.vercel.app/top-rated-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const visibleProducts = seeMore ? products : products.slice(0, 8);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>Top Rated Products | Bukla Bazaar</title>
      </Helmet>
      <div className="mx-auto px-4 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg md:text-xl font-bold my-12 text-center bg-black inline px-4 rounded-tr-2xl text-gray-100">
              Top Rated Products
            </h2>
          </div>
          <div>
            {!seeMore && (
              <div className="text-center ">
                <button
                  onClick={() => setSeeMore(true)}
                  className="px-5 text-blue-400 transition duration-300"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
        <hr className="border-1 dark:border-white border-black" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
          {visibleProducts?.map((product, index) => (
            <motion.div
              key={product._id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

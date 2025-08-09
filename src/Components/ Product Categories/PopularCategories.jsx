import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function PopularCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://bulka-bazar-server.vercel.app/popular-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>Popular Categories | Bukla Bazaar</title>
      </Helmet>
      <div className="mx-auto px-4 pb-10">
        {/* changes design */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-center my-12 bg-black inline px-4 rounded-tr-2xl text-gray-100">
             Popular Categories
            </h2>
          </div>
        </div>

        <hr className="border-1 dark:border-white border-black" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="bg-[#FFF2EB] dark:bg-[#0E2148] text-black dark:text-white rounded-lg p-4 text-center shadow-xl shadow-gray-400 dark:shadow-gray-600 hover:shadow-md transition"
            >
              <img
                src={cat.image || "https://via.placeholder.com/150"}
                alt={cat._id}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded mb-2"
              />
              <h3 className="font-semibold text-lg">{cat._id}</h3>
              <p className="text-gray-500">{cat.count} products</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

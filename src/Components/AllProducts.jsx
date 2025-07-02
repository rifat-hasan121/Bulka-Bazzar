import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Rating from "react-rating";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AllProducts = () => {
  const { user2 } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [isCardView, setIsCardView] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const accessToken = user2?.accessToken;

  useEffect(() => {
    const url = showAvailableOnly
      ? "https://bulka-bazar-server.vercel.app/products/available"
      : "https://bulka-bazar-server.vercel.app/products";

    fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [showAvailableOnly, accessToken]);

  const handleSelectView = (view) => {
    setIsCardView(view === "card");
    setDropdownOpen(false);
  };

  const toggleFilter = () => {
    setShowAvailableOnly((prev) => !prev);
  };

  return (
    <>
      <Helmet>
        <title>All Products | Bukla Bazaar</title>
      </Helmet>
      <div className="p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
        <motion.div
          className="flex flex-wrap justify-between items-center mb-4 my-28 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-black dark:text-gray-200">
            All Products
          </h2>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            title="Filter products with Minimum Quantity > 100"
            onClick={toggleFilter}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            {showAvailableOnly
              ? "Show All Products"
              : "Show Available Products"}
          </motion.button>

          <motion.div
            className="relative inline-block text-left"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              {isCardView ? "Card View" : "Table View"}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
              >
                <div className="py-1">
                  <button
                    onClick={() => handleSelectView("card")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Card View
                  </button>
                  <button
                    onClick={() => handleSelectView("table")}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Table View
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {isCardView ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product._id}
                className="bg-[#FFDCDC] dark:bg-[#333446] rounded shadow p-4 hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={product.ImageURL}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded mb-3"
                />
                <h3 className="text-lg font-bold text-black dark:text-gray-100">
                  {product.name}
                </h3>
                <p className="text-gray-900 dark:text-gray-200">
                  Brand: {product.Brand_Name}
                </p>
                <p className="text-gray-900 dark:text-gray-200">
                  Category: {product.category}
                </p>

                <div className="flex items-center gap-1 my-1">
                  <Rating
                    initialRating={parseFloat(product.Rating)}
                    readonly
                    emptySymbol={<FaRegStar className="text-yellow-400" />}
                    fullSymbol={<FaStar className="text-yellow-400" />}
                    halfSymbol={<FaStarHalfAlt className="text-yellow-400" />}
                  />
                </div>

                <p className="text-gray-900 dark:text-gray-200">
                  Quantity: {product.main_quantity}
                </p>

                <Link to={`/update-data/${product._id}`}>
                  <button className="mt-2 bg-[#B33791] text-white px-4 py-1 rounded hover:bg-[#FF8888] transition">
                    Update
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse bg-white dark:bg-gray-800 shadow-md rounded">
              <thead className="bg-blue-100 dark:bg-gray-800">
                <tr>
                  <th className=" px-4 py-2 text-black dark:text-gray-200">
                    Image
                  </th>
                  <th className=" px-4 py-2 text-black dark:text-gray-200">
                    Name
                  </th>
                  <th className=" px-4 py-2 text-black dark:text-gray-200">
                    Brand
                  </th>
                  <th className=" px-4 py-2 text-black dark:text-gray-200">
                    Category
                  </th>
                  <th className=" px-4 py-2 text-black dark:text-gray-200">
                    Rating
                  </th>
                  <th className=" px-4 py-2 text-black dark:text-gray-200">
                    Quantity
                  </th>
                  <th className=" px-4 py-2 text-black dark:text-gray-200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <motion.tr
                    key={product._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className=" bg-blue-50 dark:bg-gray-700 px-4 py-2">
                      <img
                        src={product.ImageURL}
                        alt={product.name}
                        className="h-16 w-16 object-cover rounded"
                      />
                    </td>
                    <td className=" bg-blue-50 dark:bg-gray-700 px-4 py-2 text-black dark:text-gray-200">
                      {product.name}
                    </td>
                    <td className="bg-blue-50 dark:bg-gray-700 px-4 py-2 text-black dark:text-gray-200">
                      {product.Brand_Name}
                    </td>
                    <td className="bg-blue-50 dark:bg-gray-700 px-4 py-2 text-black dark:text-gray-200">
                      {product.category}
                    </td>
                    <td className="bg-blue-50 dark:bg-gray-700 px-4 py-2 text-black dark:text-gray-200">
                      <div className="flex items-center gap-1">
                        <Rating
                          initialRating={parseFloat(product.Rating)}
                          readonly
                          emptySymbol={
                            <FaRegStar className="text-yellow-400 text-sm" />
                          }
                          fullSymbol={
                            <FaStar className="text-yellow-400 text-sm" />
                          }
                          halfSymbol={
                            <FaStarHalfAlt className="text-yellow-400 text-sm" />
                          }
                        />
                      </div>
                    </td>
                    <td className="bg-blue-50 dark:bg-gray-700 px-4 py-2 text-black dark:text-gray-200">
                      {product.main_quantity}
                    </td>
                    <td className="bg-blue-50 dark:bg-gray-700 px-4 py-2 text-black dark:text-gray-200">
                      <Link to={`/update-data/${product._id}`}>
                        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                          Update
                        </button>
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;

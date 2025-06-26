import { Helmet } from "react-helmet";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  // console.log(product)
  return (
    <>
      <Helmet>
        <title>Products | Bukla Bazaar</title>
      </Helmet>
      <Link
        to={`/product-details/${product._id}`}
        className="no-underline text-black dark:text-white"
      >
        <div className="min-h-96 bg-[#FFF2EB] dark:bg-[#0E2148] rounded-lg p-4 flex flex-col shadow-xl shadow-gray-400 dark:shadow-gray-800 hover:shadow-lg transition duration-200">
          <img
            src={product.ImageURL || "https://via.placeholder.com/300"}
            alt={product.name}
            className="h-40 object-cover rounded mb-4"
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">Brand: {product.Brand_Name}</p>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
          <div className="flex items-center gap-1 my-1">
            <Rating
              initialRating={parseFloat(product.Rating)}
              readonly
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-400" />}
              halfSymbol={<FaStarHalfAlt className="text-yellow-400" />}
            />
          </div>
        </div>
      </Link>
    </>
  );
}

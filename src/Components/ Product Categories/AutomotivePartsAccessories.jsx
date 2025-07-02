import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import ReactStars from "react-rating-stars-component";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const AutomotivePartsAccessories = () => {
  const [products, setProducts] = useState([]);

  const { user2 } = useContext(AuthContext);
  const accessToken = user2?.accessToken;

  // This component can be used to display electronics products
  useEffect(() => {
    if (!accessToken) {
      console.error("Access token is not available.");
      return;
    } else {
      const category = "Automotive Parts Accessories";
      fetch(
        `https://bulka-bazar-server.vercel.app/products?category=${category}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [accessToken]);

  return (
    <>
      <Helmet>
        <title>Automotive Parts Accessories | Bukla Bazaar</title>
      </Helmet>
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white text-center px-12 py-20">
        <h1 className="text-3xl mt-32">Automobile Parts Accessories</h1>

        <p className="text-lg mt-4">
          Explore a wide range of automotive parts and accessories including
          tires, batteries, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {products.map((product) => {
            console.log(product);
            return (
              <div
                key={product._id}
                className="card bg-blue-50 dark:bg-gray-700 w-96 shadow-sm"
              >
                <figure>
                  <img src={product.ImageURL} alt={product.name} />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center text-center gap-2">
                    <h2 className="text-[20px] badge badge-accent">
                      {product.Brand_Name}
                    </h2>
                    <span className="badge badge-secondary">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="card-title">{product.name}</h2>
                  <p>
                    {product.description.length > 100
                      ? product.description.slice(0, 100) + "..."
                      : product.description}
                  </p>
                  <div className="flex justify-between items-center text-center gap-2 my-4">
                    <div>
                      <h2 className="text-[20px]">
                        Min.sel.Quant. : {product.Minimum_selling_quantity}
                      </h2>
                      <h2>Stock: {product.main_quantity}</h2>
                    </div>

                    {/* React Rating Stars Component */}
                    <div className="flex items-center gap-1 my-1">
                      <Rating
                        initialRating={parseFloat(product.Rating)}
                        readonly
                        emptySymbol={<FaRegStar className="text-yellow-400" />}
                        fullSymbol={<FaStar className="text-yellow-400" />}
                        halfSymbol={
                          <FaStarHalfAlt className="text-yellow-400" />
                        }
                      />
                    </div>

                    <span className="">{product.Price}$</span>
                  </div>
                  <div className="card-actions justify-end">
                    <Link to={`/product-details/${product._id}`}>
                      <button className="btn btn-primary">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AutomotivePartsAccessories;

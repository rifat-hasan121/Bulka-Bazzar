import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Loading";
import { AuthContext } from "../../Provider/AuthProvider";
import BuyModal from "./BuyModal";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  // const product = useLoaderData();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [showModal, setShowModal] = useState(false);
  const { user2 } = useContext(AuthContext);
  const accessToken = user2?.accessToken;

  useEffect(() => {
    if (!accessToken) {
      console.error("Access token is not available.");
      return;
    } else {
      setLoading(true);
      fetch(`https://bulka-bazar-server.vercel.app/products/${params.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        });
    }
  }, [setProduct, setLoading, accessToken, params.id]);
  console.log(product);

  if (loading) return <Loading></Loading>;

  return (
    <>
      <Helmet>
        <title>Products Details | Bukla Bazaar</title>
      </Helmet>
      <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white text-center px-12 py-20 min-h-screen flex flex-col justify-center items-center">
        <div className="card bg-blue-50 dark:bg-gray-700 w-96 shadow-sm">
          <figure>
            <img src={product.ImageURL} alt={product.name} />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-center gap-2">
              <h2 className="text-[20px] badge badge-accent">
                {product.Brand_Name}
              </h2>
              <span className="badge badge-secondary">{product.category}</span>
            </div>
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="flex justify-between items-center text-center gap-2 my-4">
              <h2 className="text-[20px]">
                Min.sel.Qua. : {product.Minimum_selling_quantity}
              </h2>
              <div className="flex items-center gap-1 my-1">
                <Rating
                  initialRating={parseFloat(product.Rating)}
                  readonly
                  emptySymbol={<FaRegStar className="text-yellow-400" />}
                  fullSymbol={<FaStar className="text-yellow-400" />}
                  halfSymbol={<FaStarHalfAlt className="text-yellow-400" />}
                />
              </div>
              <span className="">{product.Price}$</span>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Buy Now
              </button>
              {showModal && (
                <BuyModal
                  product={product}
                  onClose={() => setShowModal(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";
import { toast } from "react-toastify";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const MyPurchases = () => {
  const { user2, logout } = useContext(AuthContext);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPurchases = async () => {
    if (!user2?.email) return;
    const accessToken = user2?.accessToken;
    try {
      const res = await axios.get(
        `https://bulka-bazar-server.vercel.app/my-purchases?email=${user2.email}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            creadientials: "include",
          },
        }
      );
      setPurchases(res.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.error("Unauthorized access - please log in again.");
        // logout();
        logout()
          .then(() => {
            Swal.fire({
              title: "Unauthorized access - please log in again.",
              icon: "error",
              draggable: true,
            });
          })
          .catch((error) => {
            toast.error(`${error}`);
          });
      } else if (err.response && err.response.status === 403) {
        console.error(
          "Forbidden access - you do not have permission to view this resource."
        );
        // toast.error("You do not have permission to view this resource.");
        Swal.fire({
          title: "Forbidden access",
          text: "You do not have permission to view this resource.",
          icon: "question",
        });
      } else {
        console.error("An error occurred while fetching products:", err);
      }
      console.error("Failed to fetch purchases:", err);
      Swal.fire("Error", "Could not load purchases", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchases();
  }, [user2]);

  const handleCancel = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will cancel your purchase and restore product quantity.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.delete(
          `https://bulka-bazar-server.vercel.app/cancel-purchase/${id}`
        );
        if (res.data?.message) {
          Swal.fire(
            "Cancelled!",
            "Your purchase has been cancelled.",
            "success"
          );
          setPurchases((prev) => prev.filter((item) => item._id !== id));
        }
      } catch (err) {
        console.error("Cancel failed:", err);
        Swal.fire("Error", "Failed to cancel purchase", "error");
      }
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (purchases.length === 0) {
    return (
      <>
        <Helmet>
          <title>My Purchases | Bukla Bazaar</title>
        </Helmet>
        <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen py-20 px-4 flex justify-center items-center ">
          <div className="text-2xl font-bold">You have no purchases yet.</div>
        </div>
      </>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen py-20 px-4">
      <div className=" ">
        <div className="w-11/12 mx-auto p-4 my-28  bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-bold mb-4 ">My Purchases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {purchases.map((item) => {
              console.log(item);
              return (
                <div
                  key={item._id}
                  className=" w-fit p-4 rounded shadow bg-white dark:bg-gray-800 hover:shadow-md transition "
                >
                  <img
                    src={item.productDetails.image}
                    alt={item.productDetails.name}
                    className="h-40 w-full object-cover mb-2 rounded"
                  />
                  <h3 className="font-bold text-lg text-black dark:text-gray-200">
                    {item.productDetails.name}
                  </h3>
                  <p>
                    <strong className="text-black dark:text-gray-200">
                      Brand:{item.productDetails.Brand_Name}
                    </strong>
                  </p>
                  <p>
                    <strong className="text-black dark:text-gray-200">
                      Category: {item.productDetails.category}
                    </strong>
                  </p>
                  <p>
                    <strong className="text-black dark:text-gray-200">
                      Quantity: {item.quantity}
                    </strong>
                  </p>
                  <p>
                    <strong className="text-yellow-600">
                      <div className="flex items-center gap-1 my-1">
                        <Rating
                          initialRating={parseFloat(item.productDetails.rating)}
                          readonly
                          emptySymbol={
                            <FaRegStar className="text-yellow-400" />
                          }
                          fullSymbol={<FaStar className="text-yellow-400" />}
                          halfSymbol={
                            <FaStarHalfAlt className="text-yellow-400" />
                          }
                        />
                      </div>
                    </strong>{" "}
                  </p>
                  <p>
                    <strong className="text-black dark:text-gray-200">
                      Purchased At:{" "}
                      {new Date(item.purchaseDate).toLocaleDateString()}
                    </strong>{" "}
                  </p>
                  <p className="text-sm text-black dark:text-gray-200 mt-1 ">
                    {item.productDetails.description}
                  </p>

                  <button
                    onClick={() => handleCancel(item._id)}
                    className="btn btn-error btn-sm mt-3 w-full"
                  >
                    Cancel Purchase
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPurchases;

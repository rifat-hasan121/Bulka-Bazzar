import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const MyAddedProducts = () => {
  const { user2, logout } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const accessToken = user2?.accessToken;

  useEffect(() => {
    if (user2?.email) {
      axios
        .get(
          `https://b11a11-server-side-rifat-hasan121.vercel.app/my-product?email=${user2.email}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              credentials: "include",
              "Content-Type": "application/json",

            },
          }
        )
        .then((res) => setProducts(res.data))
        .catch((err) => {
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
        });
    }
  }, [user2, accessToken]);

  return (
    <>
      <Helmet>
        <title>My Added Products | Bukla Bazaar</title>
      </Helmet>
      <div className="bg-gray-200 dark:bg-gray-600  min-h-screen">
        <div className="max-w-6xl mx-auto p-4 py-28 text-black text-center dark:text-white">
          <h2 className="text-2xl font-bold mb-4">My Added Products</h2>
          {products.length === 0 ? (
            <p>No products added yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => {
                return (
                  <div
                    div
                    key={product._id}
                    className=" rounded  p-4 bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={
                        product.ImageURL || "https://via.placeholder.com/300"
                      }
                      alt={product.name}
                      className="h-40 w-full object-cover mb-2 rounded"
                    />
                    <h3 className="font-bold">{product.name}</h3>
                    <p>
                      <strong>Category:</strong> {product.category}
                    </p>
                    <p>
                      <strong>Brand:</strong> {product.Brand_Name || "N/A"}
                    </p>
                    <p>
                      <strong>Min Order:</strong>{" "}
                      {product.Minimum_selling_quantity || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyAddedProducts;

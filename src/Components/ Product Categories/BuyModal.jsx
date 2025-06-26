import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const BuyModal = ({ product, onClose }) => {
  const { user2 } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(
    Number(product.Minimum_selling_quantity) || 1
  );

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleBuy = async () => {
    const minimumQty = Number(product.minimum_order_quantity) || 1;

    if (quantity < minimumQty) {
      return Swal.fire(
        "Error",
        `Minimum order quantity is ${minimumQty}`,
        "error"
      );
    }

    try {
      const response = await axios.post(
        "https://b11a11-server-side-rifat-hasan121.vercel.app/purchase",
        {
          productId: product._id,
          quantity: Number(quantity),
          buyerName: user2?.displayName || "Unknown User",
          buyerEmail: user2?.email || "unknown@example.com",
        }
      );

      Swal.fire("Success", "Purchase successful!", "success");
      onClose(); // Close the modal
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Buy Products | Bukla Bazaar</title>
      </Helmet>
      <div className="modal modal-open bg-white text-black dark:bg-gray-800 dark:text-white bg-opacity-40">
        <div className="modal-box bg-white text-black dark:bg-gray-800 dark:text-white relative">
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg mb-4">Checkout</h3>

          <p>
            <strong>Product:</strong> {product.name}
          </p>
          <p>
            <strong>Price:</strong> ${product.Price}
          </p>

          <div className="my-4 flex items-center gap-2">
            <button onClick={decrease} className="btn btn-outline">
              -
            </button>
            <span>{quantity}</span>
            <button onClick={increase} className="btn btn-outline">
              +
            </button>
          </div>

          <input
            type="text"
            value={user2?.displayName || ""}
            disabled
            className="input input-bordered w-full my-2 "
          />
          <input
            type="email"
            value={user2?.email || ""}
            disabled
            className="input input-bordered w-full my-2"
          />

          <button className="btn btn-primary w-full mt-4" onClick={handleBuy}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyModal;

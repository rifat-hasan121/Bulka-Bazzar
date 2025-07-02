import React, { use } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateData = () => {
  const {
    _id,
    name,
    category,
    ImageURL,
    main_quantity,
    Minimum_selling_quantity,
    Brand_Name,
    Price,
    Rating,
    description,
  } = useLoaderData();
  const { user2 } = use(AuthContext);
  const handleFormUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    // send updated data in database

    fetch(`https://bulka-bazar-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${user2?.accessToken}`,
        crentials: "include",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire({
            title: "Update Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="py-28 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWWUpR2JYq-EQnbNMR3GVH4un9JJk03nWQ&s)] dark:bg-[url(https://t4.ftcdn.net/jpg/05/78/60/99/360_F_578609973_kGyUqmJ2Gl9wGqag78ciyDbUFaB2hdU5.jpg)] bg-cover bg-center bg-no-repeat">
      <form
        onSubmit={handleFormUpdate}
        class="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent backdrop-blur-2xl dark:bg-transparent dark:backdrop-blur-2xl rounded-2xl shadow-md space-y-6 dark:text-gray-400"
      >
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Update <span className="text-primary">Product</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <!-- Task Title --> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter Product Name"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* <!-- Category --> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Category
            </label>
            <select
              name="category"
              defaultValue={category}
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              <option>Electronics</option>
              <option>Gadgets</option>
              <option>Home & Kitchen Appliances</option>
              <option> Fashion & Apparel</option>
              <option> Industrial Machinery & Tools</option>
              <option> Health & Beauty</option>
              <option> Automotive Parts & Accessories</option>
              <option> Office Supplies & Stationery</option>
            </select>
          </div>

          {/* <!-- Img URL --> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Image URL
            </label>
            <input
              type="text"
              name="ImageURL"
              defaultValue={ImageURL}
              placeholder="Img URL"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* <!-- Main_Quantity --> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Main_Quantity
            </label>
            <input
              type="number"
              name="main_quantity"
              defaultValue={main_quantity}
              placeholder="Enter main quantity"
              min="0"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* <!-- Minimum_selling_quantity --> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Minimum_selling_quantity
            </label>
            <input
              type="number"
              name="Minimum_selling_quantity"
              defaultValue={Minimum_selling_quantity}
              placeholder="Enter Minimum selling quantity"
              min="0"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* <!-- Brand Name --> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Brand Name
            </label>
            <input
              type="text"
              name="Brand_Name"
              defaultValue={Brand_Name}
              placeholder="Brand Name"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* <!--Price--> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Price
            </label>
            <input
              type="number"
              name="Price"
              defaultValue={Price}
              placeholder="Enter Price"
              min="0"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* <!--Rating--> */}
          <div>
            <label class="block mb-1 font-medium  text-gray-800 dark:text-gray-400">
              Rating
            </label>
            <input
              type="number"
              name="Rating"
              defaultValue={Rating}
              placeholder="Enter Rating Numeric input (1-5).
"
              min="0"
              class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        {/* <!-- Description --> */}
        <div>
          <label class="block mb-1 font-medium text-gray-800 dark:text-gray-400">
            Description
          </label>
          <textarea
            rows="4"
            name="description"
            defaultValue={description}
            placeholder="Describe the task"
            class="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* <!-- Add Button --> */}
        <div class="text-center">
          <button
            type="submit"
            class="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl cursor-pointer hover:bg-blue-700 transition duration-200"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateData;

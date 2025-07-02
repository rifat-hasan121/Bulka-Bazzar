import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddProduct = () => {
  const { user2, logout } = use(AuthContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const ImageURL = form.ImageURL.value;
    const main_quantity = form.main_quantity.value;
    const Minimum_selling_quantity = form.Minimum_selling_quantity.value;
    const Brand_Name = form.Brand_Name.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;
    const category = form.category.value;
    const description = form.description.value;

    // Create a task object
    const task = {
      name,
      main_quantity,
      ImageURL,
      Minimum_selling_quantity,
      Brand_Name,
      Price,
      Rating,
      category,
      description,
      userEmail: user2?.email,
      userName: user2?.displayName,
    };

    // Send the task object to the server or perform any other action
    const accessToken = user2?.accessToken;

    // send data to the server
    fetch("https://bulka-bazar-server.vercel.app/add-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        credentials: "include",
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("Success:", data);
          Swal.fire({
            title: `${task.name} add successfully!`,
            icon: "success",
            draggable: true,
          });
          // Reset the form
          form.reset();
        }
      })
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
  };
  return (
    <>
      <Helmet>
        <title>Add Products | Bukla Bazaar</title>
      </Helmet>
      <div className="py-28 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwWWUpR2JYq-EQnbNMR3GVH4un9JJk03nWQ&s)] dark:bg-[url(https://t4.ftcdn.net/jpg/05/78/60/99/360_F_578609973_kGyUqmJ2Gl9wGqag78ciyDbUFaB2hdU5.jpg)] bg-cover bg-center bg-no-repeat">
        <form
          onSubmit={handleFormSubmit}
          class="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent backdrop-blur-2xl dark:bg-transparent dark:backdrop-blur-2xl rounded-2xl shadow-md space-y-6 dark:text-gray-400"
        >
          <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">
            Add <span className="text-primary">Product</span>
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
                class="w-full px-4 py-2 bg-white text-black dark:bg-gray-700 dark:text-white border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option>Electronics</option>
                <option>Gadgets</option>
                <option>Kitchen</option>
                <option> Fashion</option>
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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

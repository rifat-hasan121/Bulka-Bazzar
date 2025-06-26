import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const  ProductCategories = () => {
  return (
    <>
      <Helmet>
        <title>Product Categories | Bukla Bazaar</title>
      </Helmet>

      <div className="text-black bg-white dark:bg-gray-700 dark:text-white py-28 rounded-sm text-center px-12">
        <div className="my-8">
          <h3 className="text-3xl font-semibold text-black dark:text-gray-200">
            Products Category
          </h3>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link to="/electronics">
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://media.istockphoto.com/id/993760082/photo/3d-set-of-home-appliances-on-white-background.jpg?s=612x612&w=0&k=20&c=HrfQd_TbAHORYDu29Z-o9538X05OSw0flSPIZdi-aMQ="
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Electronics
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in electronics, from smartphones to home
                  appliances.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/gadgets">
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://kti.com.bd/wp-content/uploads/2024/11/high-angle-view-digital-camera-table-1-1024x683.jpg.webp"
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Gadgets
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in Gadgets, from smartphones to home
                  appliances.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/home-kitchen-appliances">
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://etimg.etb2bimg.com/photo/94147047.cms"
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Home & Kitchen Appliances
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in Home & Kitchen Appliances, from Home &
                  Kitchen Appliances.
                </p>
              </div>
            </div>{" "}
          </Link>
          <Link to="/fashion-apparel">
            {" "}
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://www.ximilar.com/wp-content/uploads/bis-images/16060/Ximilar_dominantcolors_fashion-1024x1024.jpg"
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Fashion & Apparel
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in Fashion & Apparel, from sFashion &
                  Apparel.
                </p>
              </div>
            </div>{" "}
          </Link>
          <Link to="/industrial-machinery-tools">
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://www.germansupplier.com/wp-content/uploads/2018/11/Industrial-Machinery.jpg"
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Industrial Machinery & Tools
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in Industrial Machinery & Tools, from
                  Industrial Machinery & Tools.
                </p>
              </div>
            </div>{" "}
          </Link>
          <Link to="/health-beauty">
            {" "}
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://www.digital-decorations.com/uploads/1/1/9/4/119477696/collection_2.png"
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Health & Beauty
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in Health & Beauty, from Health & Beauty.
                </p>
              </div>
            </div>{" "}
          </Link>
          <Link to="/automotive-parts-accessories">
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsKbl6_Kdr7DBRjhFbxUhvUIg0BSjrXkfpQ&s"
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Automotive Parts & Accessories
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in Automotive Parts & Accessories, from
                  Automotive Parts & Accessories.
                </p>
              </div>
            </div>{" "}
          </Link>
          <Link to="/office-supplies-stationery">
            {" "}
            <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
              <figure>
                <img
                  src="https://aqiservice.com/wp-content/uploads/2024/07/Office-supplies-and-stationary-China-inspection-services.jpg"
                  alt="Electronics"
                />
              </figure>
              <div className="">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
                  Office Supplies & Stationery
                </h2>
                <p className="text-gray-500 dark:text-gray-200 text-[16px]">
                  Explore the latest in Office Supplies & Stationery, from
                  Office Supplies & Stationery.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default  ProductCategories;
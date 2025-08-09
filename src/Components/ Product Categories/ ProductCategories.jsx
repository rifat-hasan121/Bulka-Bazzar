// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Link } from 'react-router';

// const  ProductCategories = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Product Categories | Bukla Bazaar</title>
//       </Helmet>

//       <div className="text-black bg-white dark:bg-gray-700 dark:text-white py-28 rounded-sm text-center px-12">
//         <div className="my-8">
//           <h3 className="text-3xl font-semibold text-black dark:text-gray-200">
//             Products Category
//           </h3>
//         </div>
//         {/* cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           <Link to="/electronics">
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://media.istockphoto.com/id/993760082/photo/3d-set-of-home-appliances-on-white-background.jpg?s=612x612&w=0&k=20&c=HrfQd_TbAHORYDu29Z-o9538X05OSw0flSPIZdi-aMQ="
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Electronics
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in electronics, from smartphones to home
//                   appliances.
//                 </p>
//               </div>
//             </div>
//           </Link>
//           <Link to="/gadgets">
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://kti.com.bd/wp-content/uploads/2024/11/high-angle-view-digital-camera-table-1-1024x683.jpg.webp"
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Gadgets
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in Gadgets, from smartphones to home
//                   appliances.
//                 </p>
//               </div>
//             </div>
//           </Link>
//           <Link to="/home-kitchen-appliances">
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://etimg.etb2bimg.com/photo/94147047.cms"
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Home & Kitchen Appliances
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in Home & Kitchen Appliances, from Home &
//                   Kitchen Appliances.
//                 </p>
//               </div>
//             </div>{" "}
//           </Link>
//           <Link to="/fashion-apparel">
//             {" "}
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://www.ximilar.com/wp-content/uploads/bis-images/16060/Ximilar_dominantcolors_fashion-1024x1024.jpg"
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Fashion & Apparel
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in Fashion & Apparel, from sFashion &
//                   Apparel.
//                 </p>
//               </div>
//             </div>{" "}
//           </Link>
//           <Link to="/industrial-machinery-tools">
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://www.germansupplier.com/wp-content/uploads/2018/11/Industrial-Machinery.jpg"
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Industrial Machinery & Tools
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in Industrial Machinery & Tools, from
//                   Industrial Machinery & Tools.
//                 </p>
//               </div>
//             </div>{" "}
//           </Link>
//           <Link to="/health-beauty">
//             {" "}
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://www.digital-decorations.com/uploads/1/1/9/4/119477696/collection_2.png"
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Health & Beauty
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in Health & Beauty, from Health & Beauty.
//                 </p>
//               </div>
//             </div>{" "}
//           </Link>
//           <Link to="/automotive-parts-accessories">
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsKbl6_Kdr7DBRjhFbxUhvUIg0BSjrXkfpQ&s"
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Automotive Parts & Accessories
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in Automotive Parts & Accessories, from
//                   Automotive Parts & Accessories.
//                 </p>
//               </div>
//             </div>{" "}
//           </Link>
//           <Link to="/office-supplies-stationery">
//             {" "}
//             <div className=" shadow-xl px-8 py-6 rounded-sm bg-blue-50 dark:bg-gray-800 text-center">
//               <figure>
//                 <img
//                   src="https://aqiservice.com/wp-content/uploads/2024/07/Office-supplies-and-stationary-China-inspection-services.jpg"
//                   alt="Electronics"
//                 />
//               </figure>
//               <div className="">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-4">
//                   Office Supplies & Stationery
//                 </h2>
//                 <p className="text-gray-500 dark:text-gray-200 text-[16px]">
//                   Explore the latest in Office Supplies & Stationery, from
//                   Office Supplies & Stationery.
//                 </p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default  ProductCategories;






import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import {
  MdDevices,
  MdWatch,
  MdKitchen,
  MdCheckroom,
  MdBuild,
  MdHealing,
  MdDirectionsCar,
  MdOutlineCreate,
} from "react-icons/md";

const categories = [
  { path: "/electronics", name: "Electronics", icon: <MdDevices size={20} /> },
  { path: "/gadgets", name: "Gadgets", icon: <MdWatch size={20} /> },
  {
    path: "/home-kitchen-appliances",
    name: "Home & Kitchen",
    icon: <MdKitchen size={20} />,
  },
  {
    path: "/fashion-apparel",
    name: "Fashion",
    icon: <MdCheckroom size={20} />,
  },
  {
    path: "/industrial-machinery-tools",
    name: "Industrial Tools",
    icon: <MdBuild size={20} />,
  },
  {
    path: "/health-beauty",
    name: "Health & Beauty",
    icon: <MdHealing size={20} />,
  },
  {
    path: "/automotive-parts-accessories",
    name: "Automotive Parts",
    icon: <MdDirectionsCar size={20} />,
  },
  {
    path: "/office-supplies-stationery",
    name: "Office Supplies",
    icon: <MdOutlineCreate size={20} />,
  },
];

const ProductCategories = () => {
  const [showAll, setShowAll] = useState(false);

  // প্রথমে যতটুকু জায়গায় আসবে, তার চেয়ে বেশি হলে লুকাবে
  // এখানে আমরা প্রথম 5 দেখাবো, বাকি লুকাবো, তবে showAll হলে সব দেখাবো
  const visibleCategories = showAll ? categories : categories.slice(0, 15);

  return (
    <>
      <Helmet>
        <title>Product Categories | Bukla Bazaar</title>
      </Helmet>

      <section className=" mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-extrabold my-2 bg-black inline px-4 rounded-tr-2xl text-gray-100">
              Product Categories
            </h1>
          </div>
          <div>
            <button
              onClick={() => setShowAll(!showAll)}
              className=" text-blue-400 font-medium  px-8 transition duration-300"
            >
              {showAll ? "Show Less" : "See All Categories"}
            </button>
          </div>
        </div>
        <hr className="border-1 dark:border-white border-black" />

        <div className="flex flex-wrap gap-4 my-4">
          {visibleCategories.map(({ path, name, icon }) => (
            <Link key={path} to={path} className="flex-shrink-0">
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow cursor-pointer min-w-[140px]">
                <div className="text-indigo-600 dark:text-indigo-400">
                  {icon}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  {name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductCategories;

import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import HomeLayouts from "../Pages/HomeLayouts";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ErrorPage from "../Components/ErrorPage";
import AddProduct from "../Components/AddProduct";
import Electronics from "../Components/ Product Categories/Electronics";
import Gadgets from "../Components/ Product Categories/Gadgets";
import HomeKitchenAppliances from "../Components/ Product Categories/HomeKitchenAppliances";
import FashionApparel from "../Components/ Product Categories/FashionApparel";
import IndustrialMachineryTools from "../Components/ Product Categories/IndustrialMachineryTools";
import HealthBeauty from "../Components/ Product Categories/HealthBeauty";
import AutomotivePartsAccessories from "../Components/ Product Categories/AutomotivePartsAccessories";
import OfficeSuppliesStationery from "../Components/ Product Categories/OfficeSuppliesStationery";
import ProductDetails from "../Components/ Product Categories/ProductDetails";
import AllProducts from "../Components/AllProducts";
import UpdateData from "../Components/UpdateData";
import PrivetRoute from "../Provider/PrivetRoute";
import MyPurchases from "../Components/MyPurchases";
import ProductCategories from "../Components/ Product Categories/ ProductCategories";
import MyAddedProducts from "../Components/MyAddedProducts";
import About from "../Components/About";
import FAQSection from "../Components/FAQSection";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add-product",
        element: (
          <PrivetRoute>
            <AddProduct />
          </PrivetRoute>
        ),
      },
      {
        path: "/electronics",
        Component: Electronics,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivetRoute>
            <ProductDetails />
          </PrivetRoute>
        ),
      },

      {
        path: "/gadgets",
        Component: Gadgets,
      },

      {
        path: "/home-kitchen-appliances",
        Component: HomeKitchenAppliances,
      },

      {
        path: "/fashion-apparel",
        Component: FashionApparel,
      },

      {
        path: "/industrial-machinery-tools",
        Component: IndustrialMachineryTools,
      },

      {
        path: "/health-beauty",
        Component: HealthBeauty,
      },

      {
        path: "/automotive-parts-accessories",
        Component: AutomotivePartsAccessories,
      },

      {
        path: "/office-supplies-stationery",
        Component: OfficeSuppliesStationery,
      },
      {
        path: "/all-products",
        element: (
         
            <AllProducts />
          
        ),
      },
      {
        path: "/update-data/:id",
        loader: ({ params }) =>
          fetch(`https://bulka-bazar-server.vercel.app/products/${params.id}`),
        element: <UpdateData></UpdateData>,
      },
      {
        path: "/categories",
        Component: ProductCategories,
      },
      {
        path: "/my-product",
        element: (
          <PrivetRoute>
            <MyAddedProducts />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-purchases",
        element: (
          <PrivetRoute>
            <MyPurchases />
          </PrivetRoute>
        ),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/FAQ",
        Component: FAQSection
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;

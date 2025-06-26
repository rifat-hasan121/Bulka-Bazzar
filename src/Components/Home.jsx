import React from 'react';
import Slider from './Slider';
import ProductCategories from './ Product Categories/ ProductCategories';
import TopRatedProducts from './ Product Categories/TopRatedProducts';
import PopularCategories from './ Product Categories/PopularCategories';
import HeroSlider from '../Pages/HeroSection';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home | Bukla Bazaar</title>
        </Helmet>
        <div className="my-20 dark:bg-gray-700 dark:text-gray-200">
          {/* <Slider></Slider> */}
          <HeroSlider></HeroSlider>
          <div className="w-11/12 mx-auto px-4 ">
            <ProductCategories></ProductCategories>
            <TopRatedProducts></TopRatedProducts>
            <PopularCategories></PopularCategories>
          </div>
        </div>
      </div>
    );
};

export default Home;
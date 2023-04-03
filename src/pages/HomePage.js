import React, { useEffect, useState } from "react";
import { AboutUs, Featured } from "../components";
import { useProductContext } from "../context/product_context.js";
const HomePage = () => {
  const { featuredProducts } = useProductContext;
  // const [featured, setFeatured] = useState([]);
  console.log(featuredProducts);
  if (featuredProducts != []) {
    return (
      <>
        <AboutUs />
        <Featured featured={featuredProducts} />
        {/* NOTE start on rendering the products on Monday */}
      </>
    );
  }
};

export default HomePage;

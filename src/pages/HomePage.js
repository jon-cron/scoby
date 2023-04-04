import React, { useEffect, useState } from "react";
import { AboutUs, Featured } from "../components";
import { useProductContext } from "../context/product_context.js";
import { useCollection } from "../hooks/useCollection.js";
const HomePage = () => {
  const { getProducts, getFeatured, featuredProducts } = useProductContext();
  const { documents } = useCollection("kombuchas");

  useEffect(() => {
    if (documents) {
      getProducts(documents);
      getFeatured(documents);
    }
  }, [documents]);
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

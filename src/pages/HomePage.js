import React, { useEffect, useState } from "react";
import { AboutUs, Featured } from "../components";
import { useCollection } from "../hooks/useCollection.js";
const HomePage = () => {
  const { documents: products } = useCollection("kombuchas");
  const [featured, setFeatured] = useState([]);
  const getFeatured = () => {
    if (products) {
      let arr = [];
      for (let index = 0; index < 3; index++) {
        arr.push(products[index]);
      }
      setFeatured(arr);
    }
  };
  useEffect(() => {
    getFeatured();
  }, [products]);
  return (
    <>
      <AboutUs />
      <Featured featured={featured} />
      {/* NOTE start on rendering the products on Monday */}
    </>
  );
};

export default HomePage;

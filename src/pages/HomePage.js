import React, { useEffect, useState } from "react";
import { AboutUs, Featured } from "../components";
import { useCollection } from "../hooks/useCollection.js";
const HomePage = () => {
  const { documents: products } = useCollection("kombuchas");
  const [featured, setFeatured] = useState([]);
  console.log(products);
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
  console.log(featured);
  return (
    <>
      <AboutUs />
      <Featured featured={featured} />
    </>
  );
};

export default HomePage;

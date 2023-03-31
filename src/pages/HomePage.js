import React, { useState } from "react";
import { AboutUs, Featured } from "../components";
import { useCollection } from "../hooks/useCollection.js";
const HomePage = () => {
  const { documents: products } = useCollection("kombuchas");
  const [featured, setFeatured] = useState([]);
  console.log(products);
  const getFeatured = () => {
    let arr = [];
    for (let index = 0; index < 3; index++) {
      let getItem = products.fin;
    }
  };
  return (
    <>
      <AboutUs />
      <Featured />
    </>
  );
};

export default HomePage;

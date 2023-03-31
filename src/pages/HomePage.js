import React from "react";
import { AboutUs } from "../components";
import { useCollection } from "../hooks/useCollection.js";
const HomePage = () => {
  const { documents: products } = useCollection("kombuchas");
  console.log(products);
  return (
    <>
      <AboutUs />
    </>
  );
};

export default HomePage;

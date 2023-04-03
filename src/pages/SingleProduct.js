import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument.js";

const SingleProduct = () => {
  const id = useParams().id;
  const { document } = useDocument("kombuchas", id);
  console.log(document);
  return <div>SingleProduct</div>;
};

export default SingleProduct;

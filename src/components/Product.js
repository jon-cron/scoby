import React from "react";
import styled from "styled-components";

const Product = ({ product }) => {
  const Wrapper = styled.div`
    height: 10em;
    width: 30%;
  `;
  const { id, name, description, img } = product;
  return <Wrapper>{id}</Wrapper>;
};

export default Product;

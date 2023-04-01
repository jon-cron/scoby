import React from "react";
import styled from "styled-components";

const Product = ({ product }) => {
  const Wrapper = styled.div`
    height: 15em;
    width: 30%;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    img {
      height: 8em;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      width: 100%;
      object-fit: cover;
      div {
        display: flex;
      }
    }
  `;
  const { id, name, description, img } = product;
  return (
    <Wrapper>
      <img src={img} alt="" />
      <div>
        <h6>{name}</h6>
      </div>
    </Wrapper>
  );
};

export default Product;

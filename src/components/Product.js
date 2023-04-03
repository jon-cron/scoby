import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utilities/helper.js";

const Product = ({ product }) => {
  const Wrapper = styled.div`
    height: 20em;
    width: 90%;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    img {
      height: 10em;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      width: 100%;
      object-fit: cover;
    }
    div {
      padding: 0 2px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end h4 {
        /* width: 40%; */
      }
      p {
        /* width: 40%; */
      }
    }
    p {
      margin: 0;
      padding: 0;
    }
    .btn-container {
      display: flex;
      justify-content: flex-end;
      padding: 5px;
    }
  `;
  const { id, name, description, img, price } = product;
  return (
    <Wrapper>
      <img src={img} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{formatPrice(price)}</p>
      </div>
      <p>{description.substring(0, 100)}...</p>
      <div className="btn-container">
        <Link to={`/products/${id}`} className="btn">
          See details
        </Link>
      </div>
    </Wrapper>
  );
};

export default Product;

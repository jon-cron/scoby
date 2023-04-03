import React from "react";
import styled from "styled-components";
import Product from "./Product.js";
const Wrapper = styled.div`
  margin: 0 5em;
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 1200px) {
    margin: 0 15vw auto;
  }
`;
const Text = styled.h3`
  text-align: center;
  padding: 10px;
  text-decoration: underline;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Featured = ({ featured }) => {
  console.log(featured);
  return (
    <>
      <Text>Best Sellers</Text>
      <Wrapper>
        {featured.map((feature) => {
          return <Product key={feature.id} product={feature} />;
        })}
      </Wrapper>
    </>
  );
};
export default Featured;

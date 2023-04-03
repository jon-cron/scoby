import React from "react";
import styled from "styled-components";
import Product from "./Product.js";
const Items = styled.div`
  margin: 0 5em;
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 1200px) {
    display: flex;
    column-gap: 20px;
    justify-content: space-between;
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
const Wrapper = styled.div`
  margin: 30px 0;
`;
const Featured = ({ featured }) => {
  console.log(featured);
  if (featured) {
    return (
      <Wrapper>
        <Text>Best Sellers</Text>
        <Items>
          {featured.map((feature) => {
            return <Product key={feature.id} product={feature} />;
          })}
        </Items>
      </Wrapper>
    );
  }
};
export default Featured;

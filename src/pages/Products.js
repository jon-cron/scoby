import React from "react";
import styled from "styled-components";
import { useCollection } from "../hooks/useCollection.js";
import { Product, Hero, Filter } from "../components";
const Products = () => {
  const { documents: products } = useCollection("kombuchas");

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
    column-gap: 50px;
    row-gap: 30px;
  `;
  const Container = styled.div`
    margin: 0 10vw auto;
  `;
  if (products) {
    return (
      <Container>
        <Hero title="Products" />
        <Filter />
        <Wrapper>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </Wrapper>
      </Container>
    );
  }
};

export default Products;

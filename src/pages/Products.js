import React from "react";
import styled from "styled-components";
import { useCollection } from "../hooks/useCollection.js";
import { Product, Hero, Filter } from "../components";
import { useProductContext } from "../context/product_context.js";
const Products = () => {
  // const { documents: products } = useCollection("kombuchas");
  const { products } = useProductContext();
  console.log(products);

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
        <Hero />
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

import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const PageTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
  font-size: 2rem;
  color: #ffd700;
`;

const Category = () => {
  const { category } = useParams();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <PageTitle>{category}</PageTitle>
      <ProductList>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </div>
  );
};

export default Category;

import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/productComponents/ProductCard";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding: 20px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 20px 10px;
  flex-wrap: wrap;
`;

const ProductCount = styled.div`
  font-size: 1rem;
  color: #ffd700;
`;

const SortSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #000;
  color: #ffd700;
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: #ffd700;
  }
`;

const Category = () => {
  const { category } = useParams();
  const [sortOption, setSortOption] = useState("default");
  const { t } = useTranslation();

  const filteredProducts = products.filter(
    (product) => product.categories && product.categories.includes(category)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "nameAsc":
        return a.name.localeCompare(b.name);
      case "nameDesc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <Container>
      <TopBar>
        <ProductCount>
          {category} {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </ProductCount>

        <SortSelect
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">{t("byDef")}</option>
          <option value="priceAsc">{t("byPrUp")}</option>
          <option value="priceDesc">{t("byPrDown")}</option>
          <option value="nameAsc">{t("byNameAZ")}</option>
          <option value="nameDesc">{t("byNameZA")}</option>
        </SortSelect>
      </TopBar>

      <ProductList>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </Container>
  );
};

export default Category;

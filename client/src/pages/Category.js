import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/productComponents/ProductCard";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 20px 10px;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }
`;

const ProductCount = styled.div`
  font-size: 1rem;
  color: #ffd700;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: left;
  }
`;

const SortSelect = styled.select`
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 12px;
  border: 2px solid #ffd700;
  background-color: #111;
  color: #ffd700;
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  transition: all 0.3s ease;
  letter-spacing: 1px;
  min-width: 180px;

  &:hover {
    background-color: #222;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
    border-color: #ffea00;
  }

  &:focus {
    border-color: #fff200;
    box-shadow: 0 0 20px rgba(255, 242, 0, 0.8);
  }

  option {
    background-color: #000;
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 10px 14px;
  }
`;

const Category = () => {
  const { category } = useParams();
  const [sortOption, setSortOption] = useState("default");
  const { t } = useTranslation();

  const filteredProducts = products.filter(
    (product) => product.categories && product.categories.includes(category)
  );

  const normalizeCategoryKey = (category) => {
    const map = {
      "t-shirts": "tShirts",
      apparel: "apparel",
      jersey: "jersey",
      "pro-kit": "proKit",
      hoodies: "hoodies",
      jackets: "jackets",
      pants: "pants",
      shorts: "shorts",
      accessories: "accessories",
      flag: "flag",
      scarf: "scarf",
      backpack: "backpack",
      suitcase: "suitcase",
      outlet: "outlet",
      sleeves: "sleeves",
    };

    return map[category.toLowerCase()] || category;
  };

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
          {t(normalizeCategoryKey(category))}{" "}
          {t("productCount", { count: filteredProducts.length })}
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

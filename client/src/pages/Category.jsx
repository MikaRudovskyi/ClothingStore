import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/productComponents/ProductCard";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FiSearch, FiX } from "react-icons/fi";

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

const ProductCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffd700;
  font-size: 1.7rem;
  white-space: nowrap;

  svg {
    cursor: pointer;
    font-size: 2rem;
    padding: 6px;
    border-radius: 50%;
    background-color: rgba(255, 215, 0, 0.1);
    color: #ffd700;
    border: 2px solid #ffd700;
    box-shadow: 0 0 12px rgba(255, 215, 0, 0.5);
    transition: all 0.3s ease;
  }

  svg:hover {
    transform: scale(1.2);
    color: #fff200;
    box-shadow: 0 0 20px rgba(255, 255, 0, 0.8);
    background-color: rgba(255, 255, 0, 0.1);
    border-color: #fff200;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
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

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
    width: 100%;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) rotate(0deg);
  background: none !important;
  border: none;
  cursor: pointer;
  color: #ffd700;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-50%) rotate(180deg);
    color: #ffd700;
    background: none !important;
  }

  svg {
    background: none !important;
  }

  @media (max-width: 768px) {
    margin-top: 18px;
    right: 10px;
    font-size: 1.1rem;
  }
`;

const SlideInput = styled.input`
  width: ${(props) => (props.active ? "520px" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  padding: ${(props) => (props.active ? "12px 16px" : "0")};
  margin-left: ${(props) => (props.active ? "0" : "-20px")};
  transition: all 0.4s ease;
  border-radius: 12px;
  border: 2px solid #ffd700;
  background-color: #111;
  color: #ffd700;
  font-size: 1rem;
  outline: none;
  box-shadow: ${(props) =>
    props.active ? "0 0 10px rgba(255, 215, 0, 0.3)" : "none"};

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.active ? "100%" : "0")};
    font-size: 0.9rem;
  }
`;

const Category = () => {
  const { category } = useParams();
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { t } = useTranslation();

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

  const filteredProducts = products.filter(
    (product) => product.categories && product.categories.includes(category)
  );

  const filteredBySearch = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredBySearch].sort((a, b) => {
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
        <SearchArea>
          <ProductCountWrapper>
            {t(normalizeCategoryKey(category))}{" "}
            {t("productCount", { count: sortedProducts.length })}
            <FiSearch onClick={() => setShowSearch((prev) => !prev)} />
          </ProductCountWrapper>
          <SlideInput
            type="text"
            placeholder={t("searchByName")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            active={showSearch}
          />
          {showSearch && searchQuery && (
            <ClearButton onClick={() => setSearchQuery("")}>
              <FiX />
            </ClearButton>
          )}
        </SearchArea>

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

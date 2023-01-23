import { useState, useEffect } from "react";
import { Category } from "../../models/Category";
import { getCategories, getProducts } from "../../services/index";
import { CategoryButton } from "../CategoryButton";
import { Container, Box, ProductsList } from "./style";
import { Product } from "../../models/Product";
import { formatCurrency } from "../../utils/formatCurrency";

export const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("63cc3f45e8b88a4f200d79b3");

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <Container>
        <Box>
          <h1 className="animeLeft">Food Menu</h1>
          <ul className="animeRight">
            {categories.map((category) => (
              <li key={category._id}>
                <CategoryButton onClick={() => setFilter(category._id)}>
                  <img
                    src={`http://localhost:3001/uploads/icons/${category.iconPath}`}
                    alt="icons"
                    className="icon"
                  />
                </CategoryButton>
                <p>{category.name}</p>
              </li>
            ))}
          </ul>
        </Box>
        <ProductsList>
          {products
            .filter((product) => product.category === filter)
            .map((product) => (
              <div key={product._id} className="items">
                <img
                  src={`http://localhost:3001/uploads/products/${product.imagePath}`}
                  alt="products"
                />
                <div className="infos">
                  <p>{product.name}</p>
                  <p className="description">{product.description}</p>
                  <p className="price">{formatCurrency(product.price)}</p>
                </div>
              </div>
            ))}
        </ProductsList>
      </Container>
    </>
  );
};

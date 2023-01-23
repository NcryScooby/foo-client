import { useState, useEffect } from "react";
import { Category } from "../../models/Category";
import { getCategories, getProducts } from "../../services/index";
import { CategoryButton } from "../CategoryButton";
import { Container, Box, ProductsList, CartButton } from "./style";
import { Product } from "../../models/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useSizeScreen } from "../../hooks/useSizeScreen";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import { useContext } from "react";

export const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("63cc3f45e8b88a4f200d79b3");
  const [selected, setSelected] = useState({
    id: "63cc3f45e8b88a4f200d79b3",
  });
  const screen = useSizeScreen();

  const { cart, setCart } = useContext(GlobalStateContext);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
    getProducts().then((products) => setProducts(products));
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const decreaseFromCart = (product: Product) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((p) => p._id === product._id);
    if (productIndex !== -1) {
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    }
  };

  if (!categories.length || !products.length) {
    return (
      <>
        <Container>
          <Box>
            <h1 className="animeLeft">Food Menu</h1>
            <ul className="animeRight">
              {Array.from(new Array(3)).map((item, index) => (
                <div key={index}>
                  <Stack spacing={1}>
                    <Skeleton
                      variant="rounded"
                      width={screen.width > 768 ? 96 : 64}
                      height={screen.width > 768 ? 96 : 64}
                      sx={{
                        borderRadius: "1.5rem",
                      }}
                    />
                    {screen.width > 768 ? (
                      <Skeleton variant="rounded" width={96} height={24} />
                    ) : null}
                  </Stack>
                </div>
              ))}
            </ul>
          </Box>
          <ProductsList>
            {Array.from(new Array(2)).map((item, index) => (
              <div key={index}>
                <Stack spacing={1}>
                  <Skeleton
                    variant="rounded"
                    width={300}
                    height={200}
                    sx={{
                      borderRadius: "1.5rem",
                    }}
                  />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                </Stack>
              </div>
            ))}
          </ProductsList>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        <Box>
          <h1 className="animeLeft">Food Menu</h1>
          <ul className="animeRight">
            {categories.map((category) => (
              <li key={category._id}>
                <CategoryButton
                  style={{
                    backgroundColor:
                      category._id === selected.id ? "#000000" : "",
                  }}
                  onClick={() => {
                    setFilter(category._id);
                    setSelected({ id: category._id });
                  }}
                >
                  <img
                    src={
                      category._id === selected.id
                        ? `http://localhost:3001/uploads/icons/${category.iconPathLight}`
                        : `http://localhost:3001/uploads/icons/${category.iconPath}`
                    }
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
                <div className="cart">
                  <CartButton onClick={() => addToCart(product)}>
                    Add to cart
                  </CartButton>
                  {cart.find((p: Product) => p._id === product._id) ? (
                    <CartButton onClick={() => decreaseFromCart(product)}>
                      Remove from cart
                    </CartButton>
                  ) : null}
                </div>
              </div>
            ))}
        </ProductsList>
      </Container>
    </>
  );
};

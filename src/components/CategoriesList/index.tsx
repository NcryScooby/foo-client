import { useState, useEffect } from "react";
import { Category } from "../../models/Category";
import { getCategories, getProducts } from "../../services/index";
import { CategoryButton } from "../CategoryButton";
import { Container, Box, ProductsList } from "./style";
import { Product } from "../../models/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useSizeScreen } from "../../hooks/useSizeScreen";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import { useContext } from "react";
import { Tooltip } from "@mui/material";

export const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("63cc3f45e8b88a4f200d79b3");
  const [selected, setSelected] = useState({
    id: "63cc3f45e8b88a4f200d79b3",
  });
  const screen = useSizeScreen();

  const { cart, setCart } = useContext(GlobalStateContext);

  const VITE_API_URL = import.meta.env.VITE_API_URL;

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
                        ? `${VITE_API_URL}uploads/icons/${category.iconPathLight}`
                        : `${VITE_API_URL}uploads/icons/${category.iconPath}`
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
                  src={`${VITE_API_URL}uploads/products/${product.imagePath}`}
                  alt="products"
                />
                <div className="infos">
                  <p>{product.name}</p>
                  {product.description.length > 30 ? (
                    <Tooltip
                      title={product.description}
                      placement="bottom"
                      disableInteractive
                    >
                      <p className="description">
                        {product.description.substring(0, 30)}...
                      </p>
                    </Tooltip>
                  ) : (
                    <p className="description">{product.description}</p>
                  )}
                  <div className="prices-buttons">
                    <p className="price">{formatCurrency(product.price)}</p>
                    <div className="add-remove">
                      <button onClick={() => decreaseFromCart(product)}>
                        -
                      </button>
                      {
                        cart.filter((i: Product) => i._id === product._id)
                          .length
                      }
                      <button onClick={() => addToCart(product)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </ProductsList>
      </Container>
    </>
  );
};

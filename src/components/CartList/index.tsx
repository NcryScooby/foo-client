import { useContext } from "react";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import { Product } from "../../models/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container, List, Title } from "./style";
import ReactWhatsapp from "react-whatsapp";

export const CartList = () => {
  const { cart, setCart } = useContext(GlobalStateContext);

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;
  const VITE_API_URL = import.meta.env.VITE_API_URL;

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

  if (cart.length === 0) {
    return (
      <Container>
        <Title className="animeLeft">Cart</Title>
        <p className="empty-cart">Your cart is empty</p>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Title className="animeLeft">Cart</Title>
        <List>
          {cart
            .filter(
              (item: Product, index: number, self: Product[]) =>
                self.findIndex((i) => i._id === item._id) === index
            )
            .sort((a: Product, b: Product) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((item: Product) => (
              <div key={item._id} className="items">
                <img
                  src={`${VITE_API_URL}uploads/products/${item.imagePath}`}
                  alt={item.name}
                />
                <div>
                  <h1>{item.name}</h1>
                  <p className="description">{item.description}</p>
                </div>
                <div className="add-remove">
                  <button onClick={() => decreaseFromCart(item)}>-</button>
                  {cart.filter((i: Product) => i._id === item._id).length}
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <div>
                  <p className="price">
                    {formatCurrency(
                      cart.filter((i: Product) => i._id === item._id).length *
                        item.price
                    )}
                  </p>
                </div>
                <div>
                  <button
                    className="remove"
                    onClick={() =>
                      setCart(cart.filter((i: Product) => i._id !== item._id))
                    }
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
          <div className="total">
            <span>Total:</span>
            <span>
              {formatCurrency(
                cart.reduce((acc: number, item: Product) => {
                  return acc + item.price;
                }, 0)
              )}
            </span>
          </div>
          <div className="order">
            <ReactWhatsapp
              className="whatsapp"
              number={WHATSAPP_NUMBER}
              message={`Hello, I would like to place an order\n\n${cart
                .map((item: Product) => {
                  return `1x ${item.name} - ${formatCurrency(item.price)}\n`;
                })
                .toString()
                .split(",")
                .join("")}\nTotal: ${formatCurrency(
                cart.reduce((acc: number, item: Product) => {
                  return acc + item.price;
                }, 0)
              )}`}
              element="button"
            >
              Place order
            </ReactWhatsapp>
          </div>
        </List>
      </Container>
    </>
  );
};

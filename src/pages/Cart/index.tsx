import { CartList } from "../../components/CartList";
import { Header } from "../../components/Header";
import { Container } from "./style";

export const Cart = () => {
  return (
    <>
      <Container>
        <Header />
        <CartList />
      </Container>
    </>
  );
};

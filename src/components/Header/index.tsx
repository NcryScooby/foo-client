import { Container, Logo, SearchInput } from "./style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import { useContext, useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi";

export const Header = () => {
  const { cart } = useContext(GlobalStateContext);

  useEffect(() => {
    const span = document.querySelector("span");

    span?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.3)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 300,
        iterations: 1,
      }
    );
  }, [cart]);

  return (
    <Container>
      <div>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <AiOutlineSearch className="icon" color="#909090" />
        <SearchInput type="text" name="Search" placeholder="Search" />
        <div className="cart">
          <Link to="/cart">
            <HiShoppingCart className="icon-cart" size={16} color="#909090" />
            <span>{cart.length}</span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

import { Container, Logo, SearchInput } from "./style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  return (
    <Container>
      <div>
        <Logo src={logo} alt="logo" />
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
        <AiOutlineSearch className="icon" />
        <SearchInput type="text" name="Search" placeholder="Search" />
      </div>
    </Container>
  );
};

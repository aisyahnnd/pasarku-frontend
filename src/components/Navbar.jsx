import { Link } from "react-router-dom";
import Styles from "./styles/Navbar.module.css";
import Logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.container}>
        <div>
          <img className={Styles.logo} src={Logo} alt="Logo" />
        </div>
        <ul className={Styles.topmenu}>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/transaction">Transaction</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <div className={Styles.cart}>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

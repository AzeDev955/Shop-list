import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <img src={logo} alt="logo de Shopiton" />
      <nav>
        <Link to="/productos">
          <h1>Productos</h1>
        </Link>
        <Link to="/listas">
          <h1>Listas</h1>
        </Link>
        <Link to="/login">
          <h1>Login</h1>
        </Link>
      </nav>
    </div>
  );
};

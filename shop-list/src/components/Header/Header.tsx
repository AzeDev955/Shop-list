import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router";
import { useNavigate } from "react-router";
export const Header = () => {
  const nav = useNavigate();
  return (
    <div className={styles.header_container}>
      <img src={logo} alt="logo de Shopiton" onClick={() => nav("/")} />
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

import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <img src={logo} alt="logo de Shopiton" />
      <nav>
        <h1>Shopiton</h1>
      </nav>
    </div>
  );
};

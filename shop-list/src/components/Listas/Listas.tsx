import type { ListaCard } from "./ListaCard";
import styles from "./Lista.module.scss";

export const Listas = () => {
  return (
    <div className={styles.btn_container}>
      <button>+ Crear lista</button>
    </div>
  );
};

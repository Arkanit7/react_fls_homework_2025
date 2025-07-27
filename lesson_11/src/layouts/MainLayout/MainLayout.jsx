import { Outlet } from "react-router";
import styles from "./MainLayout.module.scss";

function MainLayout() {
  return (
    <div className={styles.wrap}>
      <header></header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default MainLayout;

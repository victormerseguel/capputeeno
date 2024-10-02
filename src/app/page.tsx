import { FilterBar } from "../components/filter/filter-bar";
import { ProductList } from "../components/filter/product-list";
import { FilterPage } from "../components/filter/filter-page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <FilterPage />
      <ProductList />
      <FilterPage />
    </main>
  );
}

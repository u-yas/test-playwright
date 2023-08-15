import styles from "./page.module.css";

export default async function A() {
  const res = await (await fetch("http://localhost:8080")).json();
  const resA = await (await fetch("http://localhost:8080/a")).json();
  return (
    <main className={styles.main}>
      <div data-testid="res">{res?.title}</div>
      <div data-testid="resA">{resA?.title}</div>
    </main>
  );
}

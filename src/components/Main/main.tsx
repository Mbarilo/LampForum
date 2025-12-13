import { ReactNode } from "react";
import styles from "./main.module.css";

type MainProps = {
  children: ReactNode;
};

function Main ({ children }: MainProps) {
  return <main className={styles.mainContent}>{children}</main>;
};

export default Main;
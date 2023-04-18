import React from "react";
import styles from "./Wrapper.module.css";

export default function Wrapper({ children }) {
  return <section className={styles["app-wrapper"]}>{children}</section>;
}

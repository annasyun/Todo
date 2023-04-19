import React from "react";
import styles from "./Main.module.css";

export default function Main({ children, isDark }) {
  return (
    <main className={`${styles["main"]} ${isDark ? styles["dark-mode"] : ""}`}>
      {children}
    </main>
  );
}

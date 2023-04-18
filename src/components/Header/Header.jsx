import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { BsFillMoonFill } from "react-icons/bs";

export default function Header({ title, place }) {
  const navigate = useNavigate();

  const NavigateToAll = () => {
    navigate("/");
  };

  const NavigateToActive = () => {
    navigate("/active");
  };

  const NavigateToCompletion = () => {
    navigate("/completion");
  };

  return (
    <header className={styles["header-app"]}>
      {title === "allTodo" && <h1 className="ir">Todo</h1>}
      <h2 className="ir">{title}</h2>
      <BsFillMoonFill />
      <nav className={styles["navbar"]}>
        <ul className={styles["list-navbar"]}>
          <li
            className={place == "all" ? styles.underlined : ""}
            onClick={NavigateToAll}
          >
            All
          </li>
          <li
            className={place == "active" ? styles.underlined : ""}
            onClick={NavigateToActive}
          >
            Active
          </li>
          <li
            className={place == "completed" ? styles.underlined : ""}
            onClick={NavigateToCompletion}
          >
            Completed
          </li>
        </ul>
      </nav>
    </header>
  );
}

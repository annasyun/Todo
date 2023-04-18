import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { BsFillMoonFill } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
export default function Header({ title, place }) {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  const NavigateToAll = () => {
    navigate("/");
  };

  const NavigateToActive = () => {
    navigate("/active");
  };

  const NavigateToCompletion = () => {
    navigate("/completion");
  };

  const handleDark = () => {
    setIsDark(!isDark);
  };
  console.log(isDark);

  return (
    <header
      className={`${styles["header-app"]} ${isDark ? styles["dark-mode"] : ""}`}
    >
      {title === "allTodo" && <h1 className="ir">Todo</h1>}
      <h2 className="ir">{title}</h2>
      {isDark ? (
        <FcIdea className="img-sun" onClick={handleDark} />
      ) : (
        <BsFillMoonFill onClick={handleDark} />
      )}
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

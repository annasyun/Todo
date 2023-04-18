import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ title }) {
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
    <header>
      {title === "allTodo" && <h1 className="ir">Todo</h1>}
      <h2 className="ir">{title}</h2>
      <nav>
        <ul>
          <li onClick={NavigateToAll}>all</li>
          <li onClick={NavigateToActive}>active</li>
          <li onClick={NavigateToCompletion}>completed</li>
        </ul>
      </nav>
    </header>
  );
}

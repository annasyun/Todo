import React from "react";
import { postTodosAxios } from "../../api/todos";
import useInput from "../../hooks/useInput";
import styles from "./Form.module.css";

export default function NewTodoForm({ getTodos, isDark }) {
  const [todoValue] = useInput("");

  const handleSubmit = async () => {
    const res = await postTodosAxios({
      isCompleted: false,
      content: todoValue.value,
    });
    getTodos();
    todoValue.setValue("");
  };

  return (
    <form
      className={`${styles.form} ${isDark ? styles["dark-mode"] : ""}`}
      action=""
      method="get"
      onSubmit={handleSubmit}
    >
      <label htmlFor="inp-text">
        <input
          className={styles.text}
          id="inp-text"
          value={todoValue.value}
          onChange={todoValue.onchange}
          type="text"
          placeholder="Add Todo"
        />
      </label>
      <label htmlFor="inp-btn">
        <input
          className={styles.btn}
          id="inp-btn"
          type="submit"
          value={"Add"}
        />
      </label>
    </form>
  );
}

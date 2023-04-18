import React from "react";
import { postTodosAxios } from "../../api/todos";
import useInput from "../../hooks/useInput";

export default function NewTodoForm({ getTodos }) {
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
    <form action="" method="get" onSubmit={handleSubmit}>
      <label htmlFor="inp-text">
        <input
          id="inp-text"
          value={todoValue.value}
          onChange={todoValue.onchange}
          type="text"
        />
      </label>
      <label htmlFor="inp-btn">
        <input id="inp-btn" type="submit" value={"add"} />
      </label>
    </form>
  );
}

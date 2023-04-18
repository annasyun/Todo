import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import useInput from "../hooks/useInput";
import TodoList from "../components/TodoList";

export default function Todo() {
  const [todoValue] = useInput("");
  const [todoList, setTodoList] = useState();

  const getTodos = async () => {
    const res = await getTodosAxios();
    setTodoList(res.data);
  };
  console.log(todoList);

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = () => {
    console.log("todoValue", todoValue.value);
  };

  return (
    <>
      <header>
        <h1>Todo</h1>
        <nav>
          <ul>
            <li>all</li>
            <li>active</li>
            <li>completed</li>
          </ul>
        </nav>
      </header>
      <main>
        <TodoList todoList={todoList} />
        <form action="" method="get" onSubmit={handleSubmit}>
          <label className="ir" htmlFor="inp-text">
            <input
              id="inp-text"
              value={todoValue.value}
              onChange={todoValue.onchange}
              type="text"
            />
          </label>
          <label className="ir" htmlFor="inp-btn">
            <input id="inp-btn" type="submit" value={"add"} />
          </label>
        </form>
      </main>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import useInput from "../hooks/useInput";

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
        메인:todoitem들이 리스트 형태로 뿌려지는 곳
        <form action="" method="get" onSubmit={handleSubmit}>
          {/* <label className="ir" htmlFor="inp-checkbox">
            checkbox
          </label>
          <input id="inp-checkbox" type="checkbox" /> */}
          <label className="ir" htmlFor="inp-text">
            text
          </label>
          <input
            id="inp-text"
            value={todoValue.value}
            onChange={todoValue.onchange}
            type="text"
          />
          <label className="ir" htmlFor="inp-btn">
            btn
          </label>
          <input id="inp-btn" type="submit" value={"add"} />
        </form>
      </main>
    </>
  );
}

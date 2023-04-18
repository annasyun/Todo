import React, { useEffect, useState } from "react";
import { getTodosAxios, postTodosAxios } from "../api/todos";
import useInput from "../hooks/useInput";
import TodoList from "../components/TodoList";
import NewTodoForm from "../components/NewTodoForm";

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

  const handleSubmit = async () => {
    const res = await postTodosAxios({
      isCompleted: false,
      content: todoValue.value,
    });
    getTodos();
    todoValue.setValue("");
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
        <TodoList todoList={todoList} getTodos={getTodos} />
        <NewTodoForm handleSubmit={handleSubmit} todoValue={todoValue} />
      </main>
    </>
  );
}

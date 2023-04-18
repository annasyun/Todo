import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList";

export default function ActiveTodo() {
  const [activeTodos, setActiveTodos] = useState([]);

  const getTodos = async () => {
    const res = await getTodosAxios();
    setActiveTodos(res.data.filter((todo) => !todo.isCompleted));
  };

  console.log(activeTodos);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      해브투
      <Header title={"ActiveTodo"} />
      <TodoList getTodos={getTodos} todoList={activeTodos} />
      <NewTodoForm getTodos={getTodos} />
    </div>
  );
}

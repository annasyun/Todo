import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList";
import Wrapper from "../components/Wrapper/Wrapper";

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
    <Wrapper>
      <Header title={"ActiveTodo"} place={"active"} />
      <main>
        <TodoList getTodos={getTodos} todoList={activeTodos} />
        <NewTodoForm getTodos={getTodos} />
      </main>
    </Wrapper>
  );
}

import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import TodoList from "../components/TodoList";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";

export default function AllTodo() {
  const [todoList, setTodoList] = useState();

  const getTodos = async () => {
    const res = await getTodosAxios();
    setTodoList(res.data);
  };
  console.log(todoList);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <Header title={"allTodo"} />
      <main>
        <TodoList todoList={todoList} getTodos={getTodos} />
        <NewTodoForm getTodos={getTodos} />
      </main>
    </>
  );
}

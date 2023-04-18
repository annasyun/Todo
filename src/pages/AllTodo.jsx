import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import TodoList from "../components/TodoList";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";

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
    <Wrapper>
      <Header title={"allTodo"} place={"all"} />
      <main>
        <TodoList todoList={todoList} getTodos={getTodos} />
        <NewTodoForm getTodos={getTodos} />
      </main>
    </Wrapper>
  );
}

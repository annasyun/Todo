import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import TodoList from "../components/TodoList/TodoList";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Main from "../components/Main/Main";

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
      <Main>
        <TodoList todoList={todoList} getTodos={getTodos} />
        <NewTodoForm getTodos={getTodos} />
      </Main>
    </Wrapper>
  );
}

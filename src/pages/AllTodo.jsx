import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import TodoList from "../components/TodoList/TodoList";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Main from "../components/Main/Main";

export default function AllTodo() {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    localStorage.setItem("isDark", !isDark);
    setIsDark(!isDark);
  };
  console.log(isDark);

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
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        handleDark={handleDark}
        title={"allTodo"}
        place={"all"}
      />
      <Main isDark={isDark}>
        <TodoList todoList={todoList} getTodos={getTodos} />
        <NewTodoForm getTodos={getTodos} isDark={isDark} />
      </Main>
    </Wrapper>
  );
}

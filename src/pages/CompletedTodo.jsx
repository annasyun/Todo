import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import TodoList from "../components/TodoList/TodoList";
import Wrapper from "../components/Wrapper/Wrapper";

export default function CompletedTodo() {
  const [isDark, setIsDark] = useState(false);

  const handleDark = () => {
    localStorage.setItem("isDark", !isDark);
    setIsDark(!isDark);
  };
  const [completedTodos, setCompletedTodos] = useState([]);

  const getTodos = async () => {
    const res = await getTodosAxios();
    setCompletedTodos(res.data.filter((todo) => todo.isCompleted));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Wrapper>
      <Header
        title={"CompletedTodo"}
        place={"completed"}
        isDark={isDark}
        handleDark={handleDark}
      />
      <Main isDark={isDark}>
        <TodoList
          getTodos={getTodos}
          todoList={completedTodos}
          isDark={isDark}
        />
        <NewTodoForm getTodos={getTodos} isDark={isDark} />
      </Main>
    </Wrapper>
  );
}

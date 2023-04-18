import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import NewTodoForm from "../components/Form/NewTodoForm";
import Header from "../components/Header/Header";
import TodoList from "../components/TodoList";

export default function CompletedTodo() {
  const [completedTodos, setCompletedTodos] = useState([]);

  const getTodos = async () => {
    const res = await getTodosAxios();
    setCompletedTodos(res.data.filter((todo) => todo.isCompleted));
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(completedTodos);
  return (
    <div>
      완료됐당!
      <Header title={"CompletedTodo"} />
      <main>
        <TodoList getTodos={getTodos} todoList={completedTodos} />
        <NewTodoForm getTodos={getTodos} />
      </main>
    </div>
  );
}

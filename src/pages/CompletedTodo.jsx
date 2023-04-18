import React, { useEffect, useState } from "react";
import { getTodosAxios } from "../api/todos";
import TodoList from "../components/TodoList";

export default function CompletedTodo() {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [completionPg, setCompletionPg] = useState(true);

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
      <TodoList
        getTodos={getTodos}
        completedTodos={completedTodos}
        completionPg={completionPg}
      />
    </div>
  );
}

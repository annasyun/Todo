import React, { useEffect, useState } from "react";
import { getTodosAxios, postTodosAxios } from "../api/todos";
import useInput from "../hooks/useInput";
import TodoList from "../components/TodoList";
import NewTodoForm from "../components/NewTodoForm";
import { useNavigate } from "react-router-dom";

export default function AllTodo() {
  const navigate = useNavigate();

  const NavigateToCompletion = () => {
    // setCompletionPg(true);
    navigate("/completion");
  };

  const [todoValue] = useInput("");
  const [todoList, setTodoList] = useState();
  const [completedTodos, setCompletedTodos] = useState([]);


  const getTodos = async () => {
    const res = await getTodosAxios();
    setTodoList(res.data);
    setCompletedTodos(res.data.filter((todo) => todo.isCompleted));
  };
  console.log(todoList);
  console.log(completedTodos);

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
            <li onClick={NavigateToCompletion}>completed</li>
          </ul>
        </nav>
      </header>
      <main>
        <TodoList
          todoList={todoList}
          getTodos={getTodos}
          // completionPg={completionPg}
          completedTodos={completedTodos}
        />
        <NewTodoForm handleSubmit={handleSubmit} todoValue={todoValue} />
      </main>
    </>
  );
}

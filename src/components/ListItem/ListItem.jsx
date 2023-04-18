import { useState } from "react";
import { deleteTodosAxios, updateTodosAxios } from "../../api/todos";
import styles from "./ListItem.module.css";

export default function ListItem({ content, id, getTodos, isCompleted }) {
  const [completion, SetCompletion] = useState(isCompleted);
  const handleCompletion = async () => {
    SetCompletion(!completion);
    await updateTodosAxios(id, {
      content: content,
      isCompleted: !completion,
    });
    getTodos();
  };
  const handleDelete = async () => {
    const res = await deleteTodosAxios(id);

    getTodos();
  };
  return (
    <li id={id}>
      <label htmlFor="inp-checkbox">
        <input id="inp-checkbox" type="checkbox" onClick={handleCompletion} />
      </label>
      <span className={completion ? styles.checked : ""}>{content}</span>

      <button onClick={handleDelete} type="button">
        삭제
      </button>
    </li>
  );
}

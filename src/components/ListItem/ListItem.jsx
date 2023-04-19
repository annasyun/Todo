import { useState } from "react";
import { deleteTodosAxios, updateTodosAxios } from "../../api/todos";
import styles from "./ListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    <li className={styles.item} id={id}>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="inp-checkbox">
          <input
            className={styles.checkbox}
            id="inp-checkbox"
            type="checkbox"
            onClick={handleCompletion}
          />
        </label>
        <span className={completion ? styles.checked : ""}>{content}</span>
      </div>

      <button type="button" className={styles.btn} onClick={handleDelete}>
        <FontAwesomeIcon  className={styles.bin} icon={faTrash} />
      </button>
    </li>
  );
}

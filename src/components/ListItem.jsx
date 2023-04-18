import { deleteTodosAxios } from "../api/todos";

export default function ListItem({ content, id, getTodos }) {
  const handleDelete = async () => {
    const res = await deleteTodosAxios(id);

    getTodos();
  };
  return (
    <li id={id}>
      <label htmlFor="inp-checkbox">
        <input id="inp-checkbox" type="checkbox" />
      </label>
      <span>{content}</span>

      <button onClick={handleDelete} type="button">
        삭제
      </button>
    </li>
  );
}

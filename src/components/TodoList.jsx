import ListItem from "./ListItem";

export default function TodoList({ todoList, getTodos }) {
  return (
    <ul>
      {todoList?.map((v) => {
        return (
          <ListItem
            key={v.id}
            content={v.content}
            id={v.id}
            getTodos={getTodos}
          />
        );
      })}
    </ul>
  );
}

import ListItem from "../ListItem/ListItem";

export default function TodoList({ todoList, getTodos }) {
  return (
    <ul>
      {todoList?.map((v) => {
        return (
          <ListItem
            key={v.id}
            content={v.content}
            id={v.id}
            isCompleted={v.isCompleted}
            getTodos={getTodos}
          />
        );
      })}
    </ul>
  );
}

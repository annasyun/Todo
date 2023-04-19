import ListItem from "../ListItem/ListItem";

export default function TodoList({ todoList, getTodos, isDark }) {
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
            isDark={isDark}
          />
        );
      })}
    </ul>
  );
}

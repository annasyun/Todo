import ListItem from "./ListItem";

export default function TodoList({ todoList }) {
  return (
    <ul>
      {todoList?.map((v) => {
        return <ListItem key={v.id} content={v.content} id={v.id} />;
      })}
    </ul>
  );
}

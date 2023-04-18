import ListItem from "./ListItem/ListItem";

export default function TodoList({
  todoList,
  getTodos,
  completedTodos,
  completionPg,
}) {
  return (
    <ul>
      {completionPg
        ? completedTodos?.map((v) => {
            return (
              <ListItem
                key={v.id}
                content={v.content}
                id={v.id}
                isCompleted={v.isCompleted}
                getTodos={getTodos}
                completedTodos={completedTodos}
              />
            );
          })
        : todoList?.map((v) => {
            return (
              <ListItem
                key={v.id}
                content={v.content}
                id={v.id}
                isCompleted={v.isCompleted}
                getTodos={getTodos}
                completedTodos={completedTodos}
              />
            );
          })}
    </ul>
  );
}

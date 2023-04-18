import React from "react";

export default function NewTodoForm({ handleSubmit,todoValue }) {
  return (
    <form action="" method="get" onSubmit={handleSubmit}>
      <label htmlFor="inp-text">
        <input
          id="inp-text"
          value={todoValue.value}
          onChange={todoValue.onchange}
          type="text"
        />
      </label>
      <label htmlFor="inp-btn">
        <input id="inp-btn" type="submit" value={"add"} />
      </label>
    </form>
  );
}

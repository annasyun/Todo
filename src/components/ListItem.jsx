export default function ListItem({ content, id }) {
  return (
    <li id={id}>
      <label htmlFor="inp-checkbox">
        <input id="inp-checkbox" type="checkbox" />
      </label>
      <span>{content}</span>
      <button type="button">삭제</button>
    </li>
  );
}

/** @format */

function FilterButton(props) {
  return (
    <button type="button" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>{props.buttonName}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

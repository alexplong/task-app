/** @format */

function Form(props) {
  return (
    <div>
      <form onSubmit={props.onTaskSubmit}>
        <h2>
          <label htmlFor="taskInput">Add a task</label>
        </h2>
        <input
          type="text"
          value={props.task.text}
          onChange={props.onHandleChange}
          id="taskInput"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;

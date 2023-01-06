/** @format */

function TaskItem(props) {
  const { tasks, handleEdit, onDeleteClick } = props;

  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <li>
              {index}. {task.text}
            </li>
            <input />
            <button type="button" onClick={() => handleEdit(task.id)}>
              Edit
            </button>
            <button type="button" onClick={() => onDeleteClick(task.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
}

export default TaskItem;

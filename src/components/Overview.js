/** @format */

function Overview(props) {
  const { tasks, handleEdit, setUpdate, onDeleteClick } = props;

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list">
      {/* assistive technology */}
      {tasks.map((task, index) => {
        return (
          <div key={task.id}>
            <li>
              <input
                type="checkbox"
                id={task.id}
                defaultChecked={task.completed}
              />
              <label htmlFor={task.id}>{task.text}</label>
              <div className="btn-group">
                <button type="button" onClick={() => handleEdit(task.id)}>
                  Edit
                </button>
                <button type="button" onClick={() => onDeleteClick(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          </div>
        );
      })}
    </ul>
  );
}

export default Overview;

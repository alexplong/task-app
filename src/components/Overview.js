/** @format */

function Overview(props) {
  const { tasks, handleEdit, setUpdate, onDeleteClick } = props;

  const editingTemplate = (
    <div>
      <div>
        <span>
          <label htmlFor="editTask">Change {}</label>
        </span>
      </div>
      <input
        type="text"
        // value={ }
        id="editTask"
      />
      <div>
        <button type="submit">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </div>
  );

  const viewTemplate = (
    <div>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list">
        {/* assistive technology */}
        {tasks.map((task) => {
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
    </div>
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list">
      {/* assistive technology */}
      {tasks.map((task) => {
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

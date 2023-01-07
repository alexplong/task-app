/** @format */

function Overview(props) {
  const {
    taskToEdit,
    onHandleEditChange,
    tasks,
    handleEditMode,
    handleSaveEdit,
    handleKeyDown,
    onDeleteClick,
  } = props;

  const editingTemplate = (task) => {
    return (
      <div key={task.id}>
        <div>
          <span>
            <label htmlFor="editTask">Edit {task.text}</label>
          </span>
        </div>
        <input
          type="text"
          id="editTask"
          value={taskToEdit.text}
          onChange={onHandleEditChange}
          onKeyDown={handleKeyDown}
        />
        <div>
          <button type="submit" onClick={() => handleEditMode(task.id, "off")}>
            Cancel
          </button>
          <button type="submit" onClick={() => handleSaveEdit(task.id)}>
            Save
          </button>
        </div>
      </div>
    );
  };

  const viewTemplate = (task) => {
    return (
      <div key={task.id}>
        <li>
          <input type="checkbox" id={task.id} defaultChecked={task.completed} />
          <label htmlFor={task.id}>{task.text}</label>
          <div className="btn-group">
            <button type="button" onClick={() => handleEditMode(task.id, "on")}>
              Edit
            </button>
            <button type="button" onClick={() => onDeleteClick(task.id)}>
              Delete
            </button>
          </div>
        </li>
      </div>
    );
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list">
      {/* role above for assistive technology */}
      {tasks.map((task) => {
        if (task.editMode === true) {
          return editingTemplate(task);
        } else {
          return viewTemplate(task);
        }
      })}
    </ul>
  );
}

export default Overview;

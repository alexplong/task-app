/** @format */

function EditTasks(props) {
  return (
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
}

export default EditTasks;

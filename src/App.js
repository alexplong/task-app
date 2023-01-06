/** @format */
import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [
        { text: "Eat", id: "sample1" },
        { text: "Sleep", id: "sample2" },
        { text: "Code", id: "sample3" },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onTaskSubmit = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  };

  handleEdit = (id) => {
    console.log("i will edit soon");
    // this.setState({});
  };

  setUpdate = (updatedTask, id) => {
    this.setState({
      task: {
        text: this.state.tasks.map((task) => {
          if (task.id === id) {
            task.text = updatedTask;
          }
          return task;
        }),
      },
    });
  };

  onDeleteClick = (id) => {
    // e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((items) => items.id !== id),
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <h1>Your To Do App Developed with React</h1>
        <form onSubmit={this.onTaskSubmit}>
          <h2>
            <label htmlFor="taskInput">Add a task</label>
          </h2>
          <input
            type="text"
            value={task.text}
            onChange={this.handleChange}
            id="taskInput"
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <button type="button" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <Overview
          tasks={tasks}
          handleEdit={this.handleEdit}
          setUpdate={this.setUpdate}
          onDeleteClick={this.onDeleteClick}
        />
      </div>
    );
  }
}

export default App;

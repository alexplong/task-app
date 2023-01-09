/** @format */
import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import Form from "./components/Form";
import FilterButtons from "./components/FilterButtons";
import RemainingTasksInfo from "./components/RemainingTasksInfo";
import EditTasks from "./components/EditTask";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        newText: "",
        id: uniqid(),
        editMode: false, // new
        completed: false,
      },
      tasks: [
        { text: "Eat", id: "sample1", editMode: false, completed: true },
        { text: "Sleep", id: "sample2", editMode: false, completed: false },
        { text: "Code", id: "sample3", editMode: false, completed: false },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        editMode: false,
        completed: false,
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
        editMode: false,
        completed: false,
      },
    });
  };

  handleEditMode = (id, state) => {
    // new
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (item.id === id && state === "on") {
          return { ...item, editMode: true };
        }
        if (item.id === id && state === "off") {
          return { ...item, editMode: false };
        }
        return item;
      }),
    });
  };

  onHandleEditChange = (e) => {
    this.setState({
      task: {
        newText: e.target.value,
      },
    });
  };

  handleSaveEdit = (id) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (item.id === id) {
          return { ...item, text: this.state.task.newText, editMode: false };
        }
        return item;
      }),
      task: {
        newText: "",
      },
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.parentNode);
    }
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

        <Form
          task={task}
          onHandleChange={this.handleChange}
          onTaskSubmit={this.onTaskSubmit}
        />
        <RemainingTasksInfo tasks={tasks} />
        <FilterButtons />

        <Overview
          taskToEdit={task}
          onHandleEditChange={this.onHandleEditChange}
          tasks={tasks}
          handleEditMode={this.handleEditMode}
          onDeleteClick={this.onDeleteClick}
          handleSaveEdit={this.handleSaveEdit}
          handleKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default App;

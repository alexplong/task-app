/** @format */
import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
        completed: false,
      },
      tasks: [
        { text: "Eat", id: "sample1", completed: true },
        { text: "Sleep", id: "sample2", completed: false },
        { text: "Code", id: "sample3", completed: false },
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

        <Form
          task={task}
          onHandleChange={this.handleChange}
          onTaskSubmit={this.onTaskSubmit}
        />
        <h2>{tasks.length} tasks remaining</h2>
        <FilterButton />
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

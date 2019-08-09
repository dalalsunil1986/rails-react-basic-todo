import React, { Component } from "react";
import ToDoForm from "./ToDoForm.js";
import ToDoContainer from "./ToDoContainer.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: []
    };
  }

  componentDidMount = () => {
    this.getTodos();
  };

  getTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          toDos: resp
        })
      );
  };

  addToDo = toDo => {
    const { toDos } = this.state;
    const newToDo = { ...toDo, id: Date.now() };

    this.setState({
      toDos: [...toDos, newToDo]
    });

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToDo)
    }).then(resp => this.getTodos());
  };

  deleteToDo = id => {
    const { toDos } = this.state;
    const newToDos = toDos.filter(toDo => toDo.id !== id);

    this.setState({
      toDos: newToDos
    });

    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE"
    });
  };

  render() {
    const { toDos } = this.state;

    return (
      <div className="App">
        <h1 className="display-3 title">ToDo App</h1>
        <ToDoForm addToDo={this.addToDo} />
        <ToDoContainer toDos={toDos} deleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

export default App;

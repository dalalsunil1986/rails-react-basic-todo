import React from 'react'

const ToDoItem = ({ title, text, deleteToDo, id }) => {
  return(
    <div className="jumbotron">
      <h1 className="display-3">{title}</h1>
      <hr className="my-4"></hr>
      <p className="lead">{text}</p>
      <hr className="my-4"></hr>
      <button className="btn btn-primary btn-lg" onClick={() => deleteToDo(id)}>Delete ToDo</button>
    </div>
  )
}

export default ToDoItem;
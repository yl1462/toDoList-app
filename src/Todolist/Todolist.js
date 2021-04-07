import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Todolist extends Component {
  render() {
    return (

      <div className="toDoList">

        {/* add new to do button on top of the page */}
        <button><Link to='/add'>Add New</Link></button>

        {/* each to do item shows the title and description */}
        <ul>
          {
            this.props.todos.map((todo, index) => (
              <li key={index}>
                <p className="todotitle">
                  {todo.title}<br />
                </p>
                <p>
                  {/* let user edit or delete their to do items */}
                  {todo.description}<br />
                  <button><Link to={{ pathname: `/edit/${todo.id}`, state: { todo, index } }}>Edit</Link> </button> <button onClick={() => this.props.deleteToDo(todo.id)}>Delete</button>
                </p>
              </li>
            ))
          }
        </ul>
      </div>

    );
  }
}

export default Todolist;

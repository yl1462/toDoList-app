import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config'

class Todolist extends Component {

  handleDelete = (id) => {
    fetch(`${config.API_ENDPOINT}/api/todo/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    
    .then(() => {
      this.props.deleteToDo(id)
      this.props.history.push('/home')
    })
    .catch(err => {
        this.setState({err})
    })
}

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
                  <button><Link to={{ pathname: `/edit/${todo.id}`, state: { todo, index } }}>Edit</Link> </button> <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
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

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class EditToDo extends Component {
  handleChange(e) {
    const editedToDo = e.target.value
    this.props.onChange(editedToDo)
  }

  render() {
    const editedToDo = this.props.editedToDo
    return (
      <>
        <div className="EditToDo">
          <form id="todos[i].id" onChange={this.handleChange}>
            <input type='text' placeholder={editedToDo.title}/><br />
            <input type='text' placeholder={editedToDo.description}/><br />
            <button type='submit'><Link to='/'>Update</Link></button>
          </form>
        </div>
      </>
    );
  }
}

export default EditToDo;

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class AddToDo extends Component {

  state = {
    title: '',
    description: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
      title: this.state.title,
      description: this.state.description,
      id: uuidv4()
    }
    this.props.addToDo(todo)
    this.props.history.push('/')
  }


  render() {
    let { title, description } = this.props

    return (
      <>
        <div className="AddToDo">
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='title'
              value={title}
              onChange={this.handleChange}
              name='title'
            />
            <br />
            <input
              type='text'
              placeholder='description'
              value={description}
              onChange={this.handleChange}
              name='description'
            />
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddToDo;

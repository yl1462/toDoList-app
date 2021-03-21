import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

class EditToDo extends Component {
  state = {
    title: '',
    description: '',
    id: '',
    index: ''
  }

  componentDidMount() {
    console.log(this.props.location.state.todo)
    const {title, description, id} = this.props.location.state.todo
    const {index} = this.props.location.state
    this.setState({
      title,
      description,
      id,
      index
    })
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const editedToDo = {
      title: this.state.title,
      description: this.state.description,
      id: this.state.id
    }
    this.props.editToDo(editedToDo, this.state.index)
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    const {title, description, id} = this.state

    return (
      <>
        <div className="EditToDo">
          <form onSubmit={this.handleSubmit}>
            <input 
              type='text' 
              value={title}  
              name='title'
              onChange={this.handleChange}/><br />
            <input 
              type='text' 
              value={description}  
              name='description'
              onChange={this.handleChange}/><br />
            <button 
              type='submit' 
              onSubmit={this.handleSubmit}
              >Update</button>
          </form>
        </div>
      </>
    );
  }
}

export default EditToDo;

import React, { Component } from 'react';

class EditToDo extends Component {
  state = {
    title: '',
    description: '',
    id: '',
    index: ''
  }

  componentDidMount() {
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
    const {title, description} = this.state

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

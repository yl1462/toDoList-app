import React, { Component } from 'react';
import config from '../config'
import { v4 as uuidv4 } from 'uuid'

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
    const editedToDo = {
      title: this.state.title,
      description: this.state.description,
      id: this.state.id
  }
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/todo/${this.state.id}`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(editedToDo)
    })
    .then(() => {
      console.log('edit')
      this.props.editToDo(editedToDo, this.state.index)
      this.props.history.push('/')
    })
    .catch(err => {
        this.setState({err})
    })
}

  render() {
    console.log(this.props)
    const {title, description} = this.state

    return (
      <>
        <div className="EditToDo">
          <form onSubmit={this.handleSubmit}>
            <input 
              type='text' 
              value={title}  
              name='title'
              onChange={this.handleChange}
              className="Placeholder"
              /><br />
            <textarea 
              type='text' 
              value={description}  
              name='description'
              onChange={this.handleChange}
              className="Placeholder"
              /><br />
            <button 
              type='submit' 
              >Update</button>
          </form>
        </div>
      </>
    );
  }
}

export default EditToDo;

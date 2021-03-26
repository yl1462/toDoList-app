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

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const editedToDo = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     id: this.state.id
  //   }
  //   this.props.editToDo(editedToDo, this.state.index)
  //   this.props.history.push('/')
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/edit/:id`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:this.state.title,
            description: this.state.description,
            id: uuidv4()
        })
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(err => {
                console.log(`Error Message: ${err}`)
                throw err
            })
        }
        return res.json()
    })
    .then(editedToDo => {
      this.props.editToDo(editedToDo, this.state.index)
    this.props.history.push('/')
    })
    .catch(err => {
        this.setState({err})
    })
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
              onChange={this.handleChange}
              className="Placeholder"
              /><br />
            <input 
              type='text' 
              value={description}  
              name='description'
              onChange={this.handleChange}
              className="Placeholder"
              /><br />
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

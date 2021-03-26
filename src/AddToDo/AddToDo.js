import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import config from '../config'

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

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const todo = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     id: uuidv4()
  //   }
  //   this.props.addToDo(todo)
  //   this.props.history.push('/')
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/add`, {
        method:'POST',
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
    .then(todo => {
      this.props.addToDo(todo)
      this.props.history.push('/')
    })
    .catch(err => {
        this.setState({err})
    })
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
              className="Placeholder"
            />
            <br />
            <input
              type='text'
              placeholder='description'
              value={description}
              onChange={this.handleChange}
              name='description'
              className="Placeholder"
            />
            <br />
            <button type='submit' className='AddToDo-button'>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddToDo;

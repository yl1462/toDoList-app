import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

class AddToDo extends Component {

  state = {
    title: '',
    description: ''
  }

  // handleChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     [e.target.title]: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   console.log("test")
  //   e.preventDefault()
  //   const todo = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     id: uuidv4()
  //   }
  //   console.log(todo)
  //   this.props.addToDo(todo)
  //   // this.props.history.push('/')
  // }


  render() {
    // console.log(this.props)
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
              title='title'
            />
            <br />
            <input
              type='text'
              placeholder='description'
              value={description}
              onChange={this.handleChange}
              title='description'
            />
            <br />
            <button type='submit'><Link to='/'>Submit</Link></button>
          </form>
        </div>
      </>
    );
  }
}

export default AddToDo;

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'

class Contact extends Component {
  state = {
    name: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const theMessages = {
      name: this.state.name,
      message: this.state.message,
      // id: uuidv4()
    }
    this.props.contact(theMessages)
  }

  render() {
    let { name, message } = this.props

    return (
      <>
        <div className="Contact">
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              placeholder='Your name'
              value={name}
              onChange={this.handleChange}
              name='name'
            />
            <br />
            <input
              type='text'
              placeholder='Message'
              value={message}
              onChange={this.handleChange}
              name='message'
            />
            <br />
            <button type='submit'>Send</button>
          </form>
        </div>
      </>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import config from '../config';
import PropTypes from 'prop-types'

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

  // posting new to do to the page and database
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${config.API_ENDPOINT}/api/todo`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:this.state.title,
            description: this.state.description,
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

    // add to do, then go back to homepage
    .then(todo => {
      this.props.addToDo(todo)
      this.props.history.push('/home')
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

            {/* must give a title to the new to do */}
            <input
              type='text'
              placeholder='title'
              value={title}
              onChange={this.handleChange}
              name='title'
              className="Placeholder"
              required
              pattern="[A-Za-z0-9\~\!\@\#\$\%\^\*\(\)\_]{3}"
              title="at least 3 characters required"
            />
            <br />

            {/* optional description */}
            <textarea
              type='text'
              placeholder='description'
              value={description}
              onChange={this.handleChange}
              name='description'
              className="Placeholder"
            />
            <br />

            {/* submit the new to do, then go back to homepage */}
            <button type='submit' className='AddToDo-button'>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddToDo;

AddToDo.propTypes = {
  history: PropTypes.object.isRequired
}
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Todolist from '../Todolist/Todolist'
import AddToDo from '../AddToDo/AddToDo'
import EditToDo from '../EditToDo/EditToDo'
import Contact from '../Contact/Contact'
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  state = {
    todos: [
      {title: 'todo1', description: 'exactlytodo1',id: uuidv4()},
      {title: 'todo2', description: 'exactlytodo2',id: uuidv4()},
      {title: 'todo3', description: 'exactlytodo3',id: uuidv4()}
    ]
  }

  addToDo = (todo) => {
    console.log(todo)
    this.setState({todos: [...this.state.todos, todo]}) 
  }

  deleteToDo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}) 
  }

  editToDo(editedToDo) {
    this.setState({
      todo: editedToDo
    })
  }

  contact = (theMessages) => {
    this.setState({theMessages: [...this.state.theMessages, theMessages]})
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <header>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
              </ul>
            </nav>
          </header>
          
        <Switch>
          <Route exact path='/'>
            <Todolist todos={this.state.todos} deleteToDo={this.deleteToDo}/>
          </Route>

          <Route path='/add' 
            render = {props => (
              <AddToDo addToDo={this.addToDo} {...props}/>
            )}
            
          />

          <Route path='/edit'>
            <EditToDo onChange={this.editToDo}/>
          </Route>

          <Route path='/contact'>
            <Contact contact={this.contact}/>
          </Route>
        </Switch>

        </header>
      </div>
    );
  }
}

export default App;

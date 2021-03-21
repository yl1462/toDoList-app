import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Todolist from '../Todolist/Todolist'
import AddToDo from '../AddToDo/AddToDo'
import EditToDo from '../EditToDo/EditToDo'
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
    this.setState({todos: [...this.state.todos, todo]}) 
  }

  deleteToDo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}) 
  }

  editToDo = (editedToDo, index) => {
    this.state.todos[index] = editedToDo
    this.setState({
      todos: [...this.state.todos]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Hey there! What's the plan?</h1>
            <Link to='/'>Home</Link><br /><hr /><br />
        </header>

        <main>  
          
        <Switch>
          <Route exact path='/'>
            <Todolist todos={this.state.todos} deleteToDo={this.deleteToDo}/>
          </Route>

          <Route path='/add' 
            render = {props => (
              <AddToDo addToDo={this.addToDo} {...props}/>
            )}
          />

          <Route path='/edit/:id' 
            render = {props => (
              <EditToDo editToDo={this.editToDo} todos={this.state.todos} {...props}/>
            )}
          />

        </Switch>

        </main><br /><hr /><br />

        <footer>
          <p>Created by Yuri Liang: <a href="https://yl1462.github.io/Yuri_Liang_portfolioPage/" target="_blank" rel="noreferrer">Portfolio Page</a></p>
        </footer>
      </div>
    );
  }
}

export default App;

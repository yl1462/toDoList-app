import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Todolist from '../Todolist/Todolist'
import AddToDo from '../AddToDo/AddToDo'
import EditToDo from '../EditToDo/EditToDo'
import { v4 as uuidv4 } from 'uuid'
import config from '../config'

class App extends Component {
  state = {
    todos: []
  }

  addToDo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]}) 
  }

  deleteToDo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}) 
  }

  editToDo = (editedToDo, index) => {
    const targetToDo = this.state.todos
    targetToDo[index] = editedToDo
    this.setState({
      todos: [...targetToDo]
    })
  }

  componentDidMount() {
        fetch(`${config.API_ENDPOINT}/todo`)
        .then((res) => {
            if (!res.ok) return res.json().then(e => Promise.reject(e));
            return res.json();
        })
        .then((todos) => {
            this.setState({ todos });
        })
        .catch(error => {
            console.error({ error });
        });
}

  render() {
    return (
      <div className="App">
        <header>
            <Link to='/' className="Home">
              <h1>Hey there! What's the plan?</h1>
            </Link>
            <br />
        </header>

        <main>  
          
        <Switch>
          <Route path='/add' 
            render = {props => (
              <AddToDo addToDo={this.addToDo} {...props}/>
            )}
          />

          <Route exact path='/'>
            <Todolist todos={this.state.todos} deleteToDo={this.deleteToDo}/>
          </Route>

          <Route path='/edit/:id' 
            render = {props => (
              <EditToDo editToDo={this.editToDo} todos={this.state.todos} {...props}/>
            )}
          />

        </Switch>

        </main><br />

        <footer>
          <p>Created by Yuri Liang: <a href="https://yl1462.github.io/Yuri_Liang_portfolioPage/" target="_blank" rel="noreferrer">Portfolio Page</a></p>
        </footer>
      </div>
    );
  }
}

export default App;

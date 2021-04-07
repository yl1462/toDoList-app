import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css'
import Todolist from '../Todolist/Todolist'
import AddToDo from '../AddToDo/AddToDo'
import EditToDo from '../EditToDo/EditToDo'
import LandingPage from '../LandingPage/LandingPage'
import config from '../config'
import check from './check.png'

class App extends Component {
  state = {
    todos: []
  }

  //add new to do
  addToDo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]}) 
  }

  //delete selected to do
  deleteToDo = (id) => {
    this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}) 
  }

  //edit selected to do
  editToDo = (editedToDo, index) => {
    const targetToDo = this.state.todos
    targetToDo[index] = editedToDo
    this.setState({
      todos: [...targetToDo]
    })
  }

  //getting data from database
  componentDidMount() {
        fetch(`${config.API_ENDPOINT}/api/todo`)
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

        {/* home page */}
        <header>
            <Link to='/home' className="Home">
            <h1><img src={ check } alt='check button'/> Hey there! What's the plan?</h1>
            </Link>
            <br />
        </header>

        <main>  
          
        <Switch>
          {/* landing page */}
          <Route exact path='/'>
            <LandingPage />
          </Route>

          {/* display all to do items, with delete button next to it */}
          <Route path='/home'>
            <Todolist todos={this.state.todos} deleteToDo={this.deleteToDo}/>
          </Route>

          {/* add new to do */}
          <Route path='/add' 
            render = {props => (
              <AddToDo addToDo={this.addToDo} {...props}/>
            )}
          />

          {/* edit selected to do */}
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

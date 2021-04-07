import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Todolist from './Todolist'

describe('Component does not crash', () => {
  //test if page loads
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Todolist todos={[]}/>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe(`Todolist component`, () => {
  //test if test data loads into each to do item
  const props = {
    todos: [
      {
        "title": "walk the dog",
        "description": "Dogs"
      },

      {
        "title": "walk the cat",
        "description": "Cats"        
      },

      {
        "title": "walk the pig",
        "description": "Pigs"        
      },

      {
        "title": "walk the bird",
        "description": "Birds"
      },
    ],
    history: { push: () => {} },
    match: { params: "" }
  }

  it('renders a todo in ul for each todos in array', () => {
    const ul = shallow(<Todolist {...props} />)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})

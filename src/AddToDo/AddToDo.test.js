import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddToDo from './AddToDo'

describe('renders without crashing', () => {
  //test if page loads
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <AddToDo />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe(`AddToDo component`, () => {
  const props = {
    title: 'walk the dog',
    description: 'Dogs'
  }

  //test if testing new to do could be added
  it('renders the new todo given props', () => {
    const wrapper = shallow(<AddToDo {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})


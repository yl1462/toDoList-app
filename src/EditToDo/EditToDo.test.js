import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditToDo from './EditToDo'

describe('renders without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const props = {
      state: {
        index: 0,
        todo: {
          title: "",
          description: "",
          id: 1
        }
      }
    }

    ReactDOM.render(
      <BrowserRouter>
        <EditToDo location={props} />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe(`EditToDo component`, () => {
  const props = {
    state: {
      index: 0,
      todo: {
        title: "",
        description: "",
        id: 1
      }
    }
  }

  it('renders the new todo given props', () => {
    const wrapper = shallow(<EditToDo location={props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})


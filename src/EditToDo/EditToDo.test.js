import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditToDo from './EditToDo'

describe.skip('renders without crashing', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div')
    const history = createMemoryHistory();
    const state = {
        index: 0,
        todo: {
          title: "",
          description: "",
          id: 1
        }
      }
    history.push("/edit/1", state);
    

    ReactDOM.render(
      <BrowserRouter>
        <EditToDo history={history}/>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe(`EditToDo component`, () => {
  const props = {
    title: 'walk the dog',
    description: 'Dogs'
  }

  it('renders the new todo given props', () => {
    const wrapper = shallow(<EditToDo {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})


import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TodoApp from './todos/components/App'
import todoReducer from './todos/redux/reducers'
import Card from '../common/card'

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class BaseRedux extends Component {
  render() {
    return (
      <Card title="redux 基础使用">
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </Card>
    )
  }
}

export default BaseRedux

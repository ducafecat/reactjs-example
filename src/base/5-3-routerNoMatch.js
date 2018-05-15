import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const Back = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const NoMatch = () => (
  <div>
    <h2>没有匹配</h2>
  </div>
)

class RouterView extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/back">返回</Link>
            </li>
            <li>
              <Link to="/also/will/not/match">路由请求</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/back" component={Back} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterView

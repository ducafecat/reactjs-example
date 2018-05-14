import React, {Component} from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

const Login = () => (
  <div>
    <h2>自动跳转了 用户登录</h2>
  </div>
)

class routerBase extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/dashboard">用户后台</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect from="/dashboard" to="/login" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default routerBase

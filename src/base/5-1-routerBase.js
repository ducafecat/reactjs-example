import React, {Component} from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

class RouterView extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterView

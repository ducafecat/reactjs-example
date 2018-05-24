import React, {Component} from 'react'
// import {HashRouter as Router, Route, Link, Switch, NavLink, Prompt} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Prompt
} from 'react-router-dom'
import './base.css'

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

// const AboutMe = () => (
//   <div>
//     <h2>关于我</h2>
//   </div>
// )

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
            <li>
              <NavLink to="/about" activeClassName="selected">
                关于-NavLink
              </NavLink>
            </li>
            <li>
              <Link to="/about/me">关于我</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/about/me" component={AboutMe} /> */}
            {/* <Prompt message="确定要离开？" /> */}
            <Prompt message={location => `确定要去 ${location.pathname} ?`} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterView

import React, {Component} from 'react'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

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

const Login = () => (
  <div>
    <h2>自动跳转了 用户登录</h2>
  </div>
)

const NoMatch = () => (
  <div>
    <h2>没有匹配</h2>
  </div>
)

const Topics = ({match}) => (
  <div>
    <h2>话题列表: </h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>请选择一个话题.</h3>}
    />
  </div>
)

const Topic = ({match}) => (
  <div>
    <h3>参数: {match.params.topicId}</h3>
  </div>
)

class routerBase extends Component {
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
              <Link to="/topics">话题参数传递</Link>
            </li>
            <li>
              <Link to="/also/will/not/match">无法匹配的路由请求</Link>
            </li>
            <li>
              <Link to="/dashboard">用户后台</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/login" component={Login} />
            <Redirect from="/dashboard" to="/login" />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default routerBase

import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

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
              <Link to="/topics/rendering">Rendering with React</Link>
            </li>
            <li>
              <Link to="/topics/components">Components</Link>
            </li>
            <li>
              <Link to="/topics/props-v-state">Props v. State</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/topics/:topicId" component={Topic} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default routerBase

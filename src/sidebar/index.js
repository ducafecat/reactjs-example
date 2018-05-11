import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NavRoutes from './routes'

function Item(props) {
  return (
    <li>
      <Link to={props.path}>{`${props.site} ${props.value}`}</Link>
    </li>
  )
}

function Items(props) {
  const childs = props.childs
  const preSite = props.site + 1
  const Items = childs.map((route, index) => (
    <Item
      key={index}
      path={route.path}
      value={route.title}
      site={`${preSite}.${index + 1}`}
    />
  ))
  return <ul>{Items}</ul>
}

function NavView(props) {
  const childs = props.childs
  const views = childs.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.main}
    />
  ))
  return <div>{views}</div>
}

const Sidebar = () => (
  <Router>
    <div style={{display: 'flex'}}>
      <div
        style={{
          padding: '10px',
          width: '40%',
          background: '#f0f0f0'
        }}
      >
        <ul style={{listStyleType: 'none', padding: 0}}>
          {NavRoutes.map((route, index) => (
            <li key={index.toString()}>
              {route.path !== '' ? (
                <Link to={route.path}>{route.title}</Link>
              ) : (
                <h1>
                  {index + 1}. {route.title}
                </h1>
              )}
              <Items childs={route.childs} site={index} />
            </li>
          ))}
        </ul>
      </div>

      {/* 组件方式 */}
      <div style={{flex: 1, padding: '10px'}}>
        {NavRoutes.map((route, index) => (
          <NavView key={index.toString()} childs={route.childs} />
        ))}
      </div>

      {/* 嵌套方式 */}
      {/* <div style={{flex: 1, padding: '10px'}}>
        {NavRoutes.map((route, index) => (
          <div key={index.toString()}>{route.childs.map((r, i) => (
            <Route
              key={i}
              path={r.path}
              exact={r.exact}
              component={r.main}
            />
          ))}</div>
        ))}
      </div> */}
    </div>
  </Router>
)

class index extends Component {
  render() {
    return <Sidebar />
  }
}

export default index

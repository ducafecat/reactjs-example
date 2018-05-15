import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import './fade.css'

const RouterView = () => (
  <Router>
    <Route
      render={({location}) => (
        <div style={styles.fill}>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/hsl/10/90/50" />}
          />

          <ul style={styles.nav}>
            <NavLink to="/hsl/10/90/50">Red</NavLink>
            <NavLink to="/hsl/120/100/40">Green</NavLink>
            <NavLink to="/rgb/33/150/243">Blue</NavLink>
            <NavLink to="/rgb/240/98/146">Pink</NavLink>
          </ul>

          <div style={styles.content}>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                  <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}
    />
  </Router>
)

const NavLink = props => (
  <li style={styles.navItem}>
    <Link {...props} style={{color: 'inherit'}} />
  </li>
)

const HSL = ({match: {params}}) => (
  <div
    style={{
      ...styles.fill,
      ...styles.hsl,
      background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}
  >
    hsl({params.h}, {params.s}%, {params.l}%)
  </div>
)

const RGB = ({match: {params}}) => (
  <div
    style={{
      ...styles.fill,
      ...styles.rgb,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}
  >
    rgb({params.r}, {params.g}, {params.b})
  </div>
)

const styles = {}

styles.fill = {
  position: 'relative',
  height: '200px',
  width: '500px'
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center',
  height: '120px'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl = {
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
  height: '120px'
}

styles.rgb = {
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px',
  height: '120px'
}

export default RouterView

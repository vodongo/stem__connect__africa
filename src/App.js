import React, { useEffect, useState } from 'react'
import {
  Route, Redirect, BrowserRouter as Router, Switch, useHistory, useLocation
} from 'react-router-dom'
import { Auth } from 'aws-amplify'

// public pages
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import BlogRead from './pages/blog/read/Read'
import Projects from './pages/projects/Projects'
import Talents from './pages/talents/Talents'
import Postproject from './pages/projects/post/Postproject'

// protected route
import Dashboard from './pages/dashboard/Dashboard'

// authentication routes
import Login from './pages/login/Login'
import Confirm from './pages/confirm/Confirm'
import Signup from './pages/signup/Signup'
import Loginhelp from './pages/loginhelp/Loginhelp'

// 404
import NoMatch from './pages/404/NoMatch'


function ProtectedRoute({ component: Component, handle__logout,user, islogged, isloading, ...rest }) {
  let location = useLocation()
  if (isloading === true) return null
  else
  return (
    <Route
      {...rest}
      render={props =>
        islogged ? (
          <Component {...props} user={user} islogged={islogged} handle__logout={handle__logout}/>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

// sample payload of aws cognito payload

function App() {
  const history = useHistory()
  const [user, setUser] = useState(null);
  const [islogged, setisLogged ] = useState(false)
  const [isregistered, setisRegistered ] = useState(false)
  const [error, setError] = useState(null)
  const [isloading, setisLoading ] = useState(true)

  useEffect(() => {
    async function check() {
      await Auth.currentAuthenticatedUser()
      .then(user => {
        setUser(user)
        setisLogged(true)
        setisLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setisLoading(false)
      });
    }
    check()
  }, [])

  /**
   * signup function
   * http://localhost:3000/login
   * @param {*} values 
   */
  async function handle__login(values) {
    // declare variables
    const username = values.email
    const password = values.password
    await Auth.signIn(username, password)
      .then(user => {
        setUser(user) // save user details
        setisLogged(true) // save is logged true
        history.push('/feed')
        setisLoading(false)
      })
      .catch(err => {
        setError(err.message)
      });
  }

  /**
   * handle logout
   * https://localhost:3000/logout
  */
  async function handle__logout() {
    setisLogged(false)
    setUser(null)
    await Auth.signOut()
  }

  /**
   * signup function
   * http://localhost:3000/signup
   * @param {*} values 
   */
  async function handle__signup(values) {
    // declare variables
    const username = values.email
    const email = values.email
    const password = values.password

    await Auth.signUp({
      username,
      password,
      attributes: {
        email,
      },
    })
      .then(() => {
        setisRegistered(true)
      })
      .catch(err => {
        setError(err.message)
      });
  }


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" render={() => <Home />} exact></Route>
          <Route path="/login"  render={props => <Login {...props} error={error} islogged={islogged} handle__login={handle__login} exact />}></Route>
          <Route path="/signup" render={props => <Signup {...props} error={error} user={user} isregistered={isregistered} handle__signup={handle__signup} />}></Route>
          <Route path="/confirm" exact>
            <Confirm />
          </Route>
          <Route path="/loginhelp" exact>
            <Loginhelp />
          </Route>
          <Route path="/talents" exact>
            <Talents />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/post-project" exact>
            <Postproject />
          </Route>
          <Route path="/blog/:title" exact>
            <BlogRead />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <ProtectedRoute path='/:id' isloading={isloading} handle__logout={handle__logout} islogged={islogged} user={user} component={Dashboard} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
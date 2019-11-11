import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Tracker from './components/tracker/tracker'
import Login from './components/login/login'


class App extends React.Component {

  render() {
    return (
      <div className="App">
      <h1>Mental Health Tracker</h1>
        <Router>
        <ul className='nav-links'>
                <li> 
                    <Link to='/tracker'>Tracker</Link>
                </li>
                <li> 
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
            <Switch>
              <Route path="/tracker" component={Tracker} />
              <Route path="/login" component={Login} />
              <Route path="/" exact />
            </Switch>
          </Router>
        </div>
        )
      }
    }
    
export default App;
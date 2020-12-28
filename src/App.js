import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './component/SignIn';
import Connect from './component/Connect';

import './connect.css'
import './SignIn.css'
import './Sidebar.css'
import './sendform.css'
import './Navbar.css'
import './Header.css'
import './msgshow.css'
import './App.css'
import './showDiv.css'
import './myProfile.css'

function App() {
	
  return (
          <Router>
        <div className="App">
    

       
            <Switch>
              
           <Route  exact path="/" component={SignIn} />
           <Route  exact path="/Connect" component={Connect} />
            
              
            
            </Switch>
            
          
        </div>
      </Router>
  )
}

export default App
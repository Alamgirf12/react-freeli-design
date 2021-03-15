import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './component/SignIn';
import Connect from './component/Connect';

import './Css/Connect.css'
import './Css/SignIn.css'
import './Css/Sidebar.css'
import './Css/Sendform.css'
import './Css/Navbar.css'
import './Css/Header.css'
import './Css/Msgshow.css'
import './Css/DirectMessage.css'
import './Css/MuteNotification.css'
import './Css/ShowDiv.css'
import './Css/MyProfile.css'
import './Css/Room.css'
import './Css/UploadFile.css'
import './Css/Notification.css'
import './Css/CheckForm.css'
import './Css/ChecklistView.css'
import './Css/ChecklistShow.css'
import './Css/Forward.css'
import './Css/AddTag.css'

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
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';


import Navbar from './Navbar';
import Chatcontainer from './Chatcontainer';
import Sendform from './Sendform';
function ChatArea() {
	
  
return (
<>
    <div style={{width:'100%',height:'70px'}}>
        <Navbar />
    </div>
    <div className="msgcontainer">    

        <Chatcontainer />
    
    </div>
    <div className="msgformbox">
        <Sendform />
    </div>
</>
)
}
export default ChatArea
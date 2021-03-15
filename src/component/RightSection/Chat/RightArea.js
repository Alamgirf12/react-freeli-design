import React from 'react';


import Navbar from '../Navbar/Navbar';
import Chatcontainer from './Chatcontainer';
function RightArea(props) {
	

return (
<>
    <div style={{width:'100%',height:'70px'}}>
        <Navbar modal={props.modal}  rightSection={props.rightSection}  personInfo={props.person}/>
    </div>
    <div className="msgcontainer">    

        <Chatcontainer modal={props.modal}  rightSection={props.rightSection} />
    
    </div>
    
</>

)
}
export default RightArea
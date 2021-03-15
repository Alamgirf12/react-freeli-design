import React,{useEffect,useRef,useState} from 'react';
import {useSelector,useDispatch}from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';




function Sendform(props) {
	   const [Message, setMessage] = useState('')
	   const [checkForm, setCheckForm] = useState(false)
	    const dispatch = useDispatch();
        const conv = useSelector(state => state.convReducer);
        


	      const placename = `Message to ${conv.name} ${conv.id}`;

	var ii = useRef(null);
	const escFunction =(event)=>{
		
    if((ii.current) && (event.keyCode === 27)) {
      ii.current.blur();
    }
    if (event.shiftKey) {
          if(event.ctrlKey){
    
      ii.current.focus();
    
    }}  
  }

	const close=()=>{
	setCheckForm(false)

}
	const open=()=>{
	setCheckForm(true)

}

useEffect(() => {
	
		
		document.addEventListener("keydown", escFunction, false);

	
})
const changeMsg =(e)=>{
	setMessage(e.target.value)
	
if(e.keyCode === 70){
		sendMsg()
	}
}
const msgkey = (e)=>{
	if(e.keyCode === 13){
		sendMsg()
	}
}
const sendMsg =(e)=>{
	
	
	  let newMessage={
     id:conv.id,
	 name:conv.name,
	 msg:Message,
	 profilePic:conv.profilePic
        }
        if(Message !== ''){
	dispatch({type:'SEND_MESSAGE',payload:newMessage})
	setMessage('')}
	else{
		alert('Your Message is empty')
	}

}


const renderChecklist = () => {
return(<>
    <div className="checklistForm">
    	<div className="formMiddle">

    		    <h2>  <i class="fas fa-clipboard-list" style={{color:'var(--PrimaryC)'}} ></i> <input style={{color:'var(--PrimaryC)',display:'inline',marginLeft:'0px',borderBottom:'0px'}} placeholder="Checklist Title" /></h2>
             <Scrollbars style={{ height: 220 }}>

    		    <p className="itmIcon" ><input type="" name=""  placeholder="Add a new task" /><i class="fas fa-clipboard-list" style={{color:'var(--PrimaryC)'}}></i></p>
    		     <p className="itmIcon" ><input type="" name=""  placeholder="Add a new task" /><i class="fas fa-clipboard-list" style={{color:'var(--PrimaryC)'}}></i></p>
    		      <p className="itmIcon" ><input type="" name=""  placeholder="Add a new task" /><i class="fas fa-clipboard-list" style={{color:'var(--PrimaryC)'}}></i></p>
    		         <p className="itmIcon" ><input type="" name=""  placeholder="Add a new task" /><i class="fas fa-clipboard-list" style={{color:'var(--PrimaryC)'}}></i></p>
    		         <p className="itmIcon" ><input type="" name=""  placeholder="Add a new task" /><i class="fas fa-clipboard-list" style={{color:'var(--PrimaryC)'}}></i></p>
    		    
            </Scrollbars>
            <br/>
    		    <div style={{marginTop:'0px',float:'right'}}>
    		    	
    		    <div  onClick={close} className="cancelChecklist" >Cancel</div>
    		    <div  className="saveChecklist" >Submit</div>
    		  
    		    </div>
    		    

    	</div>
    
    </div>
</>
)}


return (
<div className="formsection">
    <div className="msginfo"> </div>
    {checkForm ? <>{renderChecklist()}</> :

    <div className="msgform">
        <input ref={ii} type="text" placeholder={placename} onKeyDown={(e) => msgkey(e)} onChange={(e) => changeMsg(e)}  value={Message}/>
        <div className="msgicon">
            <ul>
                <li onClick={open} className="checklist"></li>
                <li  onClick={open}className="checkitm"></li>
                <li className="attach" onClick={props.uploadFile}></li>
                <li className="emoji" ></li>
                <li className="send" onClick={sendMsg}></li>
            </ul>
        </div>
    </div>

    }

</div>
)
}
export default Sendform
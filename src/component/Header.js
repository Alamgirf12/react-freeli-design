import React,{useState,useRef,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
function Navbar() {




let history = useHistory();
const [ShowResult,SetShowResult] = useState(false);

  var bb = useRef(null);
  var bbtn = useRef(null);
  const escFunction =(event)=>{
    
    if(event.keyCode === 27) {
      SetShowResult(false)
    
    }
   if (event.keyCode == 70  && event.shiftKey) {
          if(event.ctrlKey){
      
    
    }}
  }
  const clickFunction =(event)=>{
            if (bb.current && !bb.current.contains(event.target)){
            if (bbtn.current && !bbtn.current.contains(event.target))
             {
                 SetShowResult(false)
            }}
 
}

  

useEffect(() => {
  
   
    document.addEventListener("keydown", escFunction, false);
    document.addEventListener("mousedown", clickFunction, false);

  
})
const profileNav = ()=> {
}
const profilemenu= ()=>{
return(
<div>
    <div className="card"  ref={bb}>
        <div className="cardbody">
            <div className="companyname">OH Global Inc</div>
            <div className="email">
                <h6> alamgirf12@gmail.com </h6>
                <img className="settingEmail" src="/Settings.svg" />
            </div>
            <hr />
            <div className="group_input">
                <label className="switchNav">
                    <input type="checkbox" />
                    <span className="sliderNav round"></span>
                    <span className="switchFor">Thirty Six Knots</span>
                </label>
            </div>
            <div className="group_input">
                <label className="switchNav">
                    <input type="checkbox" />
                    <span className="sliderNav round"></span>
                    <span className="switchFor">Thirty Six Knots</span>
                </label>
            </div>
            <div className="group_input">
                <label className="switchNav">
                    <input type="checkbox" />
                    <span className="sliderNav round"></span>
                    <span className="switchFor">Thirty Six Knots</span>
                </label>
            </div>
            <hr />
            <div>
                <span className="linkaccount">Admin Settings</span>
                <span className="linkaccount">Change Password</span>
            </div>
        </div>
        <Link className="logOut" exact to="/">
        <div> Sign out </div>
        </Link>
    </div>
</div>
)
}
var className = ShowResult == false ? 'up' : 'down';
return (
<div>
    <div className="navsection">
        <div className="leftnav">
            <p style={{borderTop:' 4px solid #023d67',width:'90px',paddingTop:'10px',marginTop:'0px'}}>Connect</p>
        </div>
        <div className="midnav">
            <Link exact to="/">
            <img src="dd.png" alt="workfreeli" style={{borderRadius:'4px',backgroundColor: '#023d67',height:'47px',width:'220px'}} />
            </Link>
        </div>
        <div className="rightnav">
            <div ref={bbtn} >
            <img onClick={()=>SetShowResult(!ShowResult)} className="profilePic" src="/ss.jpg" />
            <img className={className}  onClick={()=>SetShowResult(!ShowResult)}  src="/Down_Chevron.svg" />
            </div>
            { ShowResult ? <div>{profilemenu()} </div> : null }
            
        </div>
    </div>
</div>
)
}
export default Navbar
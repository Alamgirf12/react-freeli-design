import React,{useState,useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import PasswordModal from '../Modal/PasswordModal';


function Header(props) {
const [ShowResult,SetShowResult] = useState(false);
const [Password,setPassword] = useState(false);

var bb = useRef(null);
var bbtn = useRef(null);
const escFunction =(event)=>{
if(event.keyCode === 27) {
SetShowResult(false)
props.rightSection('')
props.modal('')
setPassword(false)

}
if (event.keyCode === 70 && event.shiftKey) {
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
const toggle=()=>{
    setPassword(!Password)
}
useEffect(() => {
document.addEventListener("keydown", escFunction, false);
document.addEventListener("mousedown", clickFunction, false);
})
const profileView=()=>{
        props.rightSection('profile');
       SetShowResult(false)

}
const profilemenu= ()=>{
return(
<div>
    <div className="card" ref={bb}>
        <div className="cardbody">
            <div className="companyname">OH Global Inc</div>
            <div className="email" onClick={profileView}>
                <h6> alamgirf12@gmail.com </h6>
                <img  className="settingEmail" src="/Settings.svg" alt=""/>
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
                <span onClick={()=>setPassword(!Password)} className="linkaccount">Change Password</span>
            </div>
        </div>
        <Link className="logOut" exact to="/">
        <div> Sign out </div>
        </Link>
    </div>
</div>
)
}

var className = ShowResult === false ? 'up' : 'down';
return (
<div>
    {Password &&
    <div>
        <PasswordModal toggle={toggle}/>
    </div>
    }
    <div className="navsection">
        <div className="leftnav">
            <p style={{borderTop:' 4px solid #023d67',width:'90px',paddingTop:'10px',marginTop:'0px'}}>Connect</p>
        </div>
        <div className="midnav">
            <Link exact to="/">
            <img  src="dd.png" style={{borderRadius:'4px',backgroundColor: '#023d67',height:'47px',width:'220px'}} alt="workfreeli" />
            </Link>
        </div>
        <div className="rightnav">
            <div ref={bbtn}>
                <img onClick={()=>SetShowResult(!ShowResult)} className="profilePic" src="/ss.jpg" alt=""/>
                <img  className={className} onClick={()=>SetShowResult(!ShowResult)} src="/Down_Chevron.svg" alt="" />
            </div>
            { ShowResult ? <div>{profilemenu()} </div> : null }
        </div>
    </div>
</div>
)
}
export default Header
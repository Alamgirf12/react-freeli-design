import React, { useState} from 'react';
import Header from './TopBar/Header';
import Sidebar from './Sidebar/Sidebar';
import RightArea from './RightSection/Chat/RightArea';
import ReplayMsg from './RightSection/Chat/ReplayMsg';
import NotificationPage from './RightSection/NotificationPage';
import CreateRoom from './RightSection/WorkRoom/CreateRoom';
import UserFile from './File/index';
import Profile from './Profile/Profile';
import ProfileModal from './Modal/ProfileModal';
import DirectMessage from './Modal/DirectMessage';
import Forward from './Modal/Forward';
import AddTag from './Modal/AddTag';
import RoomOption from './Modal/RoomOption';
import UpoadFile from './Modal/UploadFile';
import MuteNotification from './Modal/MuteNotification';
import CheckView from './Checklist/CheckView';
import ShowChecklist from './Checklist/module/ShowChecklist';

function Connect() {

      const [toggle,setToggle] = useState('')
      const [toggleSection,setToggleSection] = useState('')

      const [person,setPerson] = useState({
      id:1,name:"Alamgir Hossain",profilePic:"ss.jpg"});
 
      const PersonInfo=(id,name,profilePic)=>{
      setPerson({id:id,name:name,profilePic:profilePic})}

const rightSection =(eventName)=>{
    switch(eventName){
    case 'profile': setToggleSection('profile'); break;
    case 'Notification': setToggleSection('Notification'); break;
    case 'Room': setToggleSection('Room'); setToggle(''); break;
    case 'ShowChecklist': setToggleSection('ShowChecklist'); setToggle(''); break;
    case 'Replay': setToggleSection('Replay'); setToggle(''); break;
    case 'ChecklistView': setToggleSection('ChecklistView'); setToggle(''); break;
    case 'user_File':setToggleSection('user_File'); break;
    default: setToggleSection('');
     }}

const modal=(eventName)=>{
    switch(eventName){ 
    case 'profile': setToggle('profile');  break;
    case 'MuteNoti': setToggle('MuteNoti');  break;
    case 'DirectMsg': setToggle('DirectMsg');  break;
    case 'custom': setToggle('custom');  break;      
    case 'upload': setToggle('upload'); break;
    case 'RoomOption': setToggle('RoomOption'); break;
    case 'Forward': setToggle('Forward'); break;
    case 'AddTag': setToggle('AddTag'); break;
    default: setToggle('');
     }}
   
return (<>

    {toggle === "RoomOption" ? <div><RoomOption modal={modal} rightSection={rightSection}/></div> : null}
    {toggle === "profile" ? <div><ProfileModal modal={modal}/></div> : null}
    {toggle === "upload" ? <div><UpoadFile modal={modal}/></div> : null}
    {toggle === "DirectMsg" ? <div><DirectMessage modal={modal} /></div> : null}
    {toggle === "Forward" ? <div><Forward modal={modal} /></div> : null}
    {toggle === "AddTag" ? <div><AddTag modal={modal} /></div> : null}
    {toggle === "MuteNoti" ? <div><MuteNotification modal={modal} /></div> : null}
     
    <Header  rightSection={rightSection} modal={modal}/>

 <div className="bodycontent">
        <div className="leftcontent">
        <Sidebar modal={modal} PersonInfo={PersonInfo} rightSection={rightSection}/> </div>

        <div className="rightcontent">   
          {toggleSection === "Room" &&  <><CreateRoom rightSection={rightSection}/></> }
          {toggleSection === "user_File" && <>  <UserFile rightSection={rightSection} />  </> }
          {toggleSection === "Notification"  && <> <NotificationPage rightSection={rightSection}/></> }
          {toggleSection === "profile" && <> <Profile rightSection={rightSection}/>  </> }
          {toggleSection === "ShowChecklist" && <> <ShowChecklist rightSection={rightSection}/>  </> }
          {toggleSection === "Replay" && <> <ReplayMsg rightSection={rightSection}/>  </> }
          {toggleSection === "ChecklistView" && <> <CheckView rightSection={rightSection} personInfo={person}/>  </> }
          {toggleSection === ""  && <> <RightArea modal={modal} person={person} rightSection={rightSection}/></>} 
        </div>   
  </div>
</>
)}
export default Connect
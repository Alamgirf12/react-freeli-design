import React,{useEffect,useRef,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  CheckListAdd from '../../Checklist/CheckListAdd';


import { Scrollbars } from 'react-custom-scrollbars';


function Chatcontainer(props) {

const [Message, setMessage] = useState('');
const [formName, setFormName] = useState('');
const [checkForm, setCheckForm] = useState(false);
const placename = `Message to Alamgir Hossain`;
    const [pop, setPop] = useState(false);
var ii = useRef(null);

const [items, setItems] = useState([
 {
            id: 1,
            msg: 'singing',
            name:'Alamgir Hossain',
             profilePic:'/ss.jpg',
        }, {
            id: 2,
            msg: 'Play video game',
            name:'Rajon',
            profilePic:'/rajon.jpg',
        }, {
            id: 3,
           msg: 'Play cricket',
            name:'Himel Talukdar ',
            profilePic:'/himel.jpg'
        }


        ]);


const escFunction =(event)=>{
     if((event.keyCode === 27)){
             setCheckForm(false)
        }

        
       if((ii.current) && (event.keyCode === 27)){
             ii.current.blur();
             setCheckForm(false)
        }

        if (event.shiftKey) {
                  if(event.ctrlKey){
                  ii.current.focus();
              }}  
             }
  const closeForm=()=>{
         setCheckForm(false)

             }


const open=(formType)=>{
          setCheckForm(true)
          setFormName(formType)
        

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
     id:Date.now(),
     name:'Alamgir',
     msg:Message,
     profilePic:'ss.jpg'}
        

    if(Message !== ''){
    setItems([...items, {id:Date.now(), name: 'Alamgir Hossain', msg:Message, profilePic:'ss.jpg'}]);
    setMessage('')}

    else{
        alert('Your Message is empty')
         }
    }



     const dropOption = () => {
        return (
            <div className="dropDown">
  
    <div className="itm"><img src="/clearMsgIn.svg" className="clearMsgIn" alt="" />Clear Message(s)</div>
    <div className="itm"><img src="/clearMsgIn.svg" className="clearMsgIn" alt="" />Remove all deleted  Message(s)</div>
</div>
        )
    }



const renderIcon=()=>{
    return(
    <>
    <div class="msgs-form-users-options">
                    <div className="flag" >
                        <img className="tagIcon"  src="/AddEmoji_white.svg" alt="" />
                    </div>
                    <div className="flag" >
                        <img className="tagIcon"  src="/NotFlagged.svg" alt="" />
                    </div>
                    <div className="call-rep-emoji" >
                        <img className="tagIcon"  onClick={()=>props.rightSection('Replay')} src="/thread.svg" alt="" />
                    </div>
                    <div className="flag" >
                        <img className="shareIcon" onClick={()=>props.modal('Forward')}src="/shareHayvenPrimary.svg" alt="" />
                    </div>
                    
                    <div className="flag" >
                        <img className="tagIcon" onClick={()=>props.modal('upload')}  src="/attach.svg" alt="" />
                    </div>
                    <div className="flag" >
                        <img className="tagIcon" onClick={()=>props.modal('AddTag')} src="/select_tag.svg" alt="" />
                    </div>
                     <div className="flag" >
                        <img className="editIcon" src="/editmsg.svg" alt="" />
                    </div>
                                { pop ? <span>{dropOption()} </span> : null }

                    <div className="flag" >
                        <img className="tagIcon" src="/MoreMenuMsg.svg" onClick={()=>setPop(!pop)} alt="" />
                    

                    </div>
                
         </div>
         </>
        )
       }

return (<>

    <div className="chatlist">
    <Scrollbars style={{ height: 440,width: '100%' }}>
       
        {
             items.map(item => {
                return <li key={item.id}><img  className="profilePic" src={item.profilePic} onClick={()=>props.modal('profile')} alt=""/> &nbsp;<span style={{fontSize:'18px'}} >{item.name}</span>&nbsp;&nbsp;
                    <span style={{fontSize:'14px',letterSpacing:'0.7px'}}>Created on 2020-01-12 2:25pm -Delevered</span>
                <span className="IconContainer">{renderIcon()}</span>

                     &nbsp; <p>{item.msg}</p></li>
              })
            }

     </Scrollbars>
     </div>




<div className="formsection">
    <div className="msginfo"> </div>
    {checkForm ? <><CheckListAdd open={closeForm} formName={formName}/></> :

    <div className="msgform">
        <input ref={ii} type="text" placeholder={placename} onKeyDown={(e) => msgkey(e)} onChange={(e) => changeMsg(e)}  value={Message}/>
         <div className="msgicon">
            <ul>
                <li onClick={()=>open('Task')} className="checklist"></li>
                <li  onClick={()=>open('Check')}className="checkitm"></li>
                <li className="attach" onClick={()=>props.modal('upload')}></li>
                <li className="emoji" ></li>
                <li className="send" onClick={sendMsg}></li>
            </ul>
        </div>
    </div>

    }

</div>
</>
    )
}
export default Chatcontainer
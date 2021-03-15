import React,{useState} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
function ReplayMsg(props) {


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

const renderIcon=()=>{
    return(
    <>
    <div class="msgs-form-users-options">
                 
                     <div className="flag" >
                        <img className="editIcon" src="/editmsg.svg" alt="" />
                    </div>
                    <div className="flag" >
                        <img className="tagIcon" src="/hayven_trash.svg" alt="" />
                    </div>
                
         </div>
         </>
        )
       }




return (<div>
    <div className="ChecklistNav">
        <div onClick={()=>props.rightSection('')} className="back1">
        </div>
        <div class="navTextChecklist">Replay Thread </div>
        <div class="back2" onClick={()=>props.rightSection('')} ></div>
    </div>
       
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
    </div>

)
}
export default ReplayMsg
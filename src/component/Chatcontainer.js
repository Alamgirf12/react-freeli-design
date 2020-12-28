import React from 'react';
import '../msgshow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector, useDispatch } from 'react-redux'





function Chatcontainer() {
    const dispatch = useDispatch();
    const msglistnew = useSelector(state => state.convReducer.msglist);
    const showProfile=(id,pname,pp)=>{
        dispatch({type:'PROFILE',payload:{name:pname,ppo:pp,show:true}})
    }
    const renderIcon=()=>{
    return(
    <>
    <div class="msgs-form-users-options">
                    <div className="call-rep-emoji" >
                        <img src="/AddEmoji.svg" alt="" />
                    </div>
                    <div className="flag" >
                        <img src="/NotFlagged.svg" alt="" />
                    </div>
                    <div className="call-rep-emoji" >
                        <img src="/AddEmoji.svg" alt="" />
                    </div>
                    <div className="flag" >
                        <img src="/NotFlagged.svg" alt="" />
                    </div>
                    <div className="call-rep-emoji" >
                        <img src="/AddEmoji.svg" alt="" />
                    </div>
                    <div className="flag" >
                        <img src="/NotFlagged.svg" alt="" />
                    </div>
                    
                
                </div>
            

    </>

    )
}

    return (
        <div className="chatlist">
    <Scrollbars style={{ height: 440,width: '100%' }}>
       
        {
              msglistnew.map(item => {
                return <li key={item.id}><img className="profilePic" src={item.profilePic} onClick={()=>showProfile(item.id,item.name,item.profilePic)} /> &nbsp;<span style={{fontSize:'18px'}} onClick={()=>showProfile(item.name)}>{item.name}</span>&nbsp;&nbsp;
                    <span style={{fontSize:'14px',letterSpacing:'0.7px'}}>Created on 2020-01-12 2:25pm</span>
                <span className="rghtIconHover">{renderIcon()}</span>

                     &nbsp; <p>{item.msg}</p></li>
              })
            }

    </Scrollbars>
</div>
    )
}
export default Chatcontainer
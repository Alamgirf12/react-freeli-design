import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Navbar from '../RightSection/Navbar/Navbar';

import { Data } from '../../data/Data'

function Sidebar(props) {
    const [ShowResult, setShowResult] = useState(false);
    const [newpin, setPin] = useState([
      
      {
            id: 1,
            name:'Md Sadequr Rahman',
            pinned:true,
            profilePic:'/sir.jpg',
        },
        {
            id: 2,
            name:'Rajon Hossain',
            pinned:true,
            profilePic:'/close_button_red.svg',
        }
               

        ])

    var inputref = useRef(null);
    var clickRef = useRef(null);

    const escFunction = (event) => {
        if ((inputref.current) && (event.keyCode === 27)) {
            inputref.current.blur();
            setShowResult(false)
        }
        if (event.keyCode === 70 && event.shiftKey) {
            if (event.ctrlKey) {
                setShowResult(true)
                inputref.current.focus();
            }
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    })
    const conv = (id, name, profilePic) => {

         props.PersonInfo(id,name,profilePic)
         props.rightSection('')
        
    }
    const openSearch = (event) => {
        setShowResult(true)
    }



    const renderSearch = () => {
        return (<div className="searchconv">
    <input type="text" placeholder="search a conversation" ref={inputref} />
    <div className="remove" onClick={()=>setShowResult(false)}></div>
</div>)
    }
    const renderRightIcon = () => {
        return ( <>
            <ul>
        <li className="search" onClick={openSearch}></li>
        <li className="flagged"></li>
        <li className="unread"></li>
        <li className="checklists"><i class="fas fa-clipboard-list"></i></li>
    </ul> </>
        )
    }
    const renderIcon = () => {
        return ( < >
            <div className="sideIcon">
            <div className="info"></div>
            <div style={{float:'right'}}>
                { !ShowResult ? <div>{renderRightIcon()} </div> : <div>{renderSearch()} </div> }
            </div>
        </div> <
            />
        )
    }
    const renderContent = () => {
        return ( < >
            <Scrollbars style={{ height: 508 }}>
                <div class="list">
                    <div onClick={()=>props.rightSection('Notification')} className="sideText">&nbsp;Workfreeli notification(s)</div>
                    <p>Pinned</p>
                    <li > &nbsp; Alamgir Hossain(it's You)</li>
                    {
                    newpin.map(item => {
                    return <li key={item.id} onClick={(filter)=>conv(item.id,item.name,item.profilePic)}> &nbsp; {item.name}</li>
                    })
                    }
                    <p><span style={{borderBottom:'1px solid white'}}>Conversation(s) </span><b className="convinfo"></b>&nbsp; &nbsp; <img alt="" src="/time-circle-plus.svg" onClick={()=>props.modal('RoomOption')} style={{cursor:'pointer'}} alt="" /> </p>
                    {
                    Data.map(item => {
                    return <li key={item.id} onClick={(filter)=>conv(item.id,item.name,item.profilePic)}> &nbsp; {item.name}</li>
                    })
                    }
                    <li><i class="fa fa-dot-circle-o" style={{fontSize:'15px',color:'#1aff1a'}}></i>&nbsp; Alamgir</li>
                    <li><img alt="" src="./online.png" alt="" />Alamgir</li>
                </div>
            </Scrollbars> <
            div className = "threadmsg" > Threaded message(12) <
            /div> < / >
        )
    }
    return (
        <aside>
   
                    <div className="menu_option">
                        {renderIcon()}
                    </div>
                    {renderContent()}
                </aside>
    )
}
export default Sidebar
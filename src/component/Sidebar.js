import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector, useDispatch } from 'react-redux'
function Sidebar() {
const [ShowResult, setShowResult] = useState(false);
const dispatch = useDispatch();
const person = useSelector(state => state.convReducer.people);
const pinItem = useSelector(state => state.convReducer.pin);
const show = useSelector(state => state.convReducer.modal);
let newPin = pinItem.filter(item => item.pinned === true );
var inputref = useRef(null);
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
const conv = (id, name,profilePic) => {
dispatch({ type: 'ADD_CONV', payload: { id, name,profilePic} });
}
const openSearch = (event) => {
setShowResult(true)
}

const showDiv = () => {
  if(!show){
dispatch({type:'SHOW_MODAL',payload:true})
}
else{
  dispatch({type:'SHOW_MODAL',payload:false})

}
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
    </ul>
    < />
    )
    }
    const renderIcon = () => {
    return ( <>
        <div className="sideIcon">
            <div className="info"></div>
            <div style={{float:'right'}}>
                { !ShowResult ? <div>{renderRightIcon()} </div> : <div>{renderSearch()} </div> }
            </div>
        </div>
        < />
        )
        }
        const renderContent = () => {
        return ( <> 
            <Scrollbars style={{ height: 508 }}>
                <div class="list">
                    <div className="sideText">&nbsp;Workfreeli notification(s)</div>
                    <p>Pinned</p>
                    <li > &nbsp; Alamgir Hossain(it's You)</li>
                    {
                    newPin.map(item => {
                    return <li key={item.id} onClick={(filter)=>conv(item.id,item.name,item.profilePic)}> &nbsp; {item.name}</li>
                    })
                    }
                    <p><span style={{borderBottom:'1px solid white'}}>Conversation(s) </span><b className="convinfo"></b>&nbsp; &nbsp; <img src="/time-circle-plus.svg" onClick={(e)=>showDiv(e)} style={{cursor:'pointer'}} alt="" /> </p>
                    {
                    person.map(item => {
                    return <li key={item.id} onClick={(filter)=>conv(item.id,item.name,item.profilePic)}> &nbsp; {item.name}</li>
                    })
                    }
                    <li><i class="fa fa-dot-circle-o" style={{fontSize:'15px',color:'#1aff1a'}}></i>&nbsp; Alamgir</li>
                    <li><img src="./online.png" alt="" />Alamgir</li>
                </div>
            </Scrollbars>
            < div className="threadmsg"> Threaded message(12)
                < /div> < />
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
import React from 'react'
import {Data} from '../../data/Data'
function DirectMessage(props) {
return (
<div>
    <div className="modalshow"></div>
    <div className="directmessbox">
        <div className="row1">
            <div className="part1" style={{fontFamily:'var(--F1)',fontWeight:'700',letterSpacing:'0.7px',fontSize:'20px'}}> Create Direct Message</div>
            <div className="part2"><span style={{marginTop:'8px'}} className="remove" onClick={()=>props.modal('')}></span></div>
        </div>
        <hr />
        <div className="row2">
            
                <input type="text" placeholder="Search a User" />
                <div className="startBtn">Start</div>
          </div>
            <p>Select only one member at a time</p>
       
        <div className="row3">
            { Data.map((itm)=>(
            <div className="large_btn2">
                <img src={itm.profilePic} alt="" /><span>{itm.name}</span>
                <span style={{float:'right',color:
                              'gray',marginRight:'10px',marginTop:'7px'}}>{itm.email}</span>
            </div>
            ))}
        </div>
    </div>
</div>
)
}
export default DirectMessage
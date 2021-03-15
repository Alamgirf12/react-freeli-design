import React from 'react'
import {Data} from '../../data/Data'

function Forward(props) {
	return (
		<div>
		    <div className="modalshow"></div>
    <div className="directmessbox">
        <div className="row1">
            <div className="part1" style={{fontFamily:'var(--F1)',fontWeight:'500',letterSpacing:'0.7px',fontSize:'22px'}}> Forward Message</div>
            <div className="part2"><span style={{marginTop:'8px'}} className="remove" onClick={()=>props.modal('')}></span></div>
        </div>
        <hr />
        <div className="ForwardRow2">
            
                <input type="text" placeholder="Search by name" />
                <div className="forwardBtn">Forward</div>
          </div>
            <p className="rowP">10 Member left</p>
       
            <div className="row3">
                { Data.map((itm)=>(
                <div className="large_btn4">
                <img src={itm.profilePic} alt="" /><span>{itm.name}</span>
               
            </div>
            ))}
        </div>
    </div>
		</div>
	)
}

export default Forward
import React,{useState}from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Profile() {
const dispatch = useDispatch();
const conv = useSelector(state => state.convReducer);
const remove = ()=>{
dispatch({type:'SHOW_PROFILE',payload:false})
}
return (<>
    <div className="hh">
        <div className="back1" onClick={remove}>
        </div>
        <div className="Name">
            <span>{conv.name}</span>
        </div>
        <div className="back2" onClick={remove}>
        </div>
    </div>
    <div className="contentBody">
        <div className="left">
            <div className="inpGroup">
                <label>Display Name (<span style={{color:'red'}}>*</span>)</label><br />
                <input type="text" value="Alamgir Hossain" />
            </div>
            <div className="inpGroup">
                <label>User Name</label><br />
                <input type="text" name="" value="Alamgir" />
            </div>
            <div className="inpGroup">
                <label>Email Address</label><br />
                <input type="text" name="" value="alamgirf12@gmail.com" />
            </div>
        </div>
        <div className="right">
            <div className="inpGroup">
                <div><img src="ss.jpg" className="UserImage" /></div>
                <div className="btn1">Change</div>
                <div className="btn2">Remove</div>
            </div><br />
            <div className="inpGroup">
                <input type="text" style={{width:'400px'}} name="" value="https://bd.freeli.io/call/88097460-5643-11ea-a7fd-0a9d8415d3d8_personal" /><br />
                <div style={{marginLeft:'150px',width:'120px'}} className="btn1">Change</div>
                <div className="btn2" style={{width:'120px'}}>Remove</div>
            </div>
        </div>
    </div>
</>
)
}
export default Profile
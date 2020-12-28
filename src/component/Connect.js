import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import CustomDiv from './CustomDiv';
import Profile from './Profile';



function Connect() {

	const show = useSelector(state => state.convReducer.modal);
	const showDiv = useSelector(state => state.convReducer.showDiv);
	const showProfile = useSelector(state => state.convReducer.showProfile);
	const showMessage = useSelector(state => state.convReducer.showMessage);
	const profile = useSelector(state => state.convReducer.profile);
	const profileData = useSelector(state => state.convReducer);
	const dispatch = useDispatch();
    const remove = () => {
    dispatch({type:'SHOW_MODAL',payload:false})
}

    const fileShow=()=>{
      dispatch({type:'SHOW_FILE',payload:true})


}

   const profHide=()=>{
      dispatch({type:'PROFILE',payload:false})


}




	const renderDiv = () => {
return (<>
  <div className="modalshow"></div>
<div className="showDiv">
    <div className="row1">
        <div className="part1">Conversation</div>
        <div className="part2"><span   className="remove"  onClick={remove}></span></div>
    </div>
    <div className="row2">
        <div className="part1" onClick={fileShow}><i class='fas fa-user-friends'></i>&nbsp;Direct Message </div>
        <div className="part2" onClick={fileShow}><i class='fas fa-user-friends'></i>&nbsp;Create Room</div>
    </div>
    <div className="row3">
        <div className="part1" onClick={fileShow}><i class='fas fa-user-friends'></i>&nbsp;Project Room </div>
        <div className="part2"><i class='fas fa-user-friends'></i>&nbsp;Support Room <p><h6>Coming soon</h6></p></div>
    </div>

</div>
</>
)
}
const renderProfile = () => {
return (<>
  <div className="modalshow"></div>
<div className="showProfile">
    <div className="row1">
        <div className="part1">Profile</div>
        <div className="part2"><span   className="remove"  onClick={profHide}></span></div>
    </div>
 <div>
 	<div style={{float:'left'}}><img className='proPic' src={profileData.proPic}  /></div>
 		<div className="rightC">
 			<div className="proName">{profileData.profName}</div>
 			<div className="emailP">www.alamgirf12@gmail.com</div>
 			<div class="profleIcon">
 				 
        <ul type="none">
            <li className="audio"></li>
            <li className="video"></li>
            <li className="more"></li>
        </ul>
    

 			</div>


 		</div>
</div>

  

</div>
</>
)
}

return (
<div>
{show ? <div>{renderDiv()}</div> : null}
{profile ? <div>{renderProfile()}</div> : null}
  


    <Header />
    <div className="bodycontent">
        <div className="leftcontent">
            <Sidebar />
        </div>
        <div className="rightcontent">

           
          {showDiv   && <> <CustomDiv/>  </> }
          {showProfile && <> <Profile/>  </> }
            {!showDiv &&  !showProfile && <><ChatArea/></>} 
           
        </div>
    </div>
</div>
)
}
export default Connect
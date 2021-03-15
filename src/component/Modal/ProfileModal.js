import React from 'react'

function ProfileModal(props) {
	return (
		<div>
			  <div className="modalshow"></div>
<div className="showProfile">
    <div className="row1">
        <div className="part1">Profile</div>
        <div className="part2"><span   className="remove"  onClick={()=>props.modal('')}></span></div>
    </div>
 <div>
 	<div style={{float:'left'}}><img className='proPic' src='/ss.jpg' /></div>
 		<div className="rightC">
 			<div className="proName">Alamgir Hossain</div>
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
		</div>
	)
}

export default ProfileModal
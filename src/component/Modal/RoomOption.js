import React from 'react'

function RoomOption(props) {
	return (
		<div>
			  <div className="modalshow"></div>
<div className="showDiv">
    <div className="row1">
        <div className="part1">Conversation</div>
        <div className="part2"><span   className="remove"  onClick={()=>props.modal('')}></span></div>
    </div>
    <div className="row2">
        <div className="part1" onClick={()=>props.modal('DirectMsg')}><i class='fas fa-user-friends'></i>&nbsp;Direct Message </div>
        <div className="part2" onClick={()=>props.rightSection('Room')}><i class='fas fa-user-friends'></i>&nbsp;Create Room</div>
    </div>
    <div className="row3">
        <div className="part1" onClick={()=>props.modal('')}><i class='fas fa-user-friends'></i>&nbsp;Project Room </div>
        <div className="part2"><i class='fas fa-user-friends'></i>&nbsp;Support Room <p><h6>Coming soon</h6></p></div>
    </div>

</div>
		</div>
	)
}

export default RoomOption
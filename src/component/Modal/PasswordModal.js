import React from 'react'

function PasswordModal(props) {
	return (<>
		<div className="modalshow"></div>
    <div className="modalContent">
        <div className="row1">
            <div className="part1">Change Password</div>
            <div className="part2" onClick={props.toggle}><span className="remove"></span></div>
        </div>
        <div className="row2">
         <div>
              <label>Current Password</label>
              <input type="" name="" placeholder="*******" />
         </div> <br/>
         <div>
              <label>New Password</label>
              <input type="" name=""  placeholder="*******" />
         </div>
          <br/>
           <div>
              <label>Confirm Password</label>
              <input type="" name=""  placeholder="*******" />
         </div>
         <div>
               <div style={{marginTop:'110px',float:'right'}}>
                    
                <div  onClick={props.toggle} className="cancelChecklist" >Cancel</div>
                <div  className="saveChecklist" >Submit</div>
              
                </div>

         </div>

      
    </div>
    </div>
    </>
	)
}

export default PasswordModal
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';


function ChecklistAdd(props) {




  const renderTask =()=>{
  return (<>
                   <h2>  <i class="fas fa-clipboard-list"></i> 
                    <input style={{color:'var(--PrimaryC)',display:'inline',marginLeft:'0px',borderBottom:'0px'}} placeholder="My Task" />
                   </h2>

             <Scrollbars style={{ height: 220 }}>
                 <p className="itmIcon"><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
            </Scrollbars>

  </>

)}

  const renderCheck =()=>{
  return (<>

                   <h2>  <i class="fas fa-clipboard-list"></i> 
                    <input style={{color:'var(--PrimaryC)',display:'inline',marginLeft:'0px',borderBottom:'0px'}} placeholder="Checklist Title" />
                   </h2>
            <Scrollbars style={{ height: 220 }}>
                 <p className="itmIcon"><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
                 <p className="itmIcon" ><input type="text"   placeholder="Add a new task" /><i class="fas fa-clipboard-list" ></i></p>
            </Scrollbars>

  </>

)}



	return (
		<div>
	 <div className="checklistForm">
        <div className="formMiddle">

                {props.formName === "Task" && renderTask()}
                {props.formName === "Check" && renderCheck()}
            <br/>
                <div style={{marginTop:'0px',float:'right'}}>
                    
                <div  onClick={props.open} className="cancelChecklist" >Cancel</div>
                <div  className="saveChecklist" >Submit</div>
              
                </div>
                

        </div>
    
    </div>
		</div>
	)
}

export default ChecklistAdd
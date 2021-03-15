import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
function ShowChecklist(props) {
return (<div>
    <div className="ChecklistNav">
        <div onClick={()=>props.rightSection('ChecklistView')} className="back1">
        </div>
        <div class="navTextChecklist">Checklist</div>
        <div class="back2" onClick={()=>props.rightSection('ChecklistView')} ></div>
    </div>
    <div className="checkContent">
        <div><img className="profilePic" src='ss.jpg' style={{marginBootom:'-20px !important'}} /> </div>
        <div>
            <div>
                <span style={{fontSize:'18px',marginTop:'-10px'}}>Alamgir Hossain</span>&nbsp;&nbsp;
                <span style={{fontSize:'14px',letterSpacing:'0.7px'}}>Created on 2020-01-12 2:25pm</span> &nbsp; <i>Delevered</i>
            </div>
            <div class="CheckBox">
                <div class="row1">
                    <h3> <i class="fas fa-clipboard-list"></i> &nbsp;Team Task</h3>
                    <h3> <i class="fas fa-clipboard-list"></i></h3>
                </div>
                <div class="row2">
                    Show All (4) | All Pending (4) | My Pending (0) | My Response Required (0) | Completed (0) | Assigned (0) | Unassigned (4) | Over Due (0) | Show Audit trails
                </div>
                <div class="row3">
                    <div><label class="container">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <input type="text" placeholder="Add a new task" value="task1" />
                        <div className="TextCheck"> Created by Dalim Chowdhury on Nov 23rd 2020 - 10:28 amtest</div>
                    </div>
                    <div><label class="container">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <input type="text" placeholder="Add a new task" value="ask2" />
                        <div className="TextCheck"> Created by Dalim Chowdhury on Nov 23rd 2020 - 10:28 amtest</div>
                    </div>
                    <div><label class="container">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <input type="text" placeholder="Add a new task" value="ask2" />
                        <div className="TextCheck"> Created by Dalim Chowdhury on Nov 23rd 2020 - 10:28 amtest</div>
                    </div>
                    <div><label class="container">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <input type="text" placeholder="Add a new task" value="ask2" />
                        <div className="TextCheck"> Created by Dalim Chowdhury on Nov 23rd 2020 - 10:28 amtest</div>
                    </div>
                    <div><label class="container">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        <input type="text" placeholder="Add a new task" value="task3" />
                        <div className="TextCheck"> Created by Dalim Chowdhury on Nov 23rd 2020 - 10:28 amtest</div>
                    </div>
                </div>

                 <div style={{marginTop:'20px',float:'right'}}>
                    
                <div  onClick={()=>props.rightSection('ChecklistView')} className="cancelChecklist" >Cancel</div>
                <div  className="saveChecklist" >Update</div>
              
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default ShowChecklist
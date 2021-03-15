import React,{useState} from 'react';
import ListView from './module/ListView';
import GridView from './module/GridView';
function CheckView(props) {
const [grid,setGrid] = useState(true);
const [list,setList] = useState(false);
return (
  <>

    <div className="menuBar">
    		<div className="iconDiv">	
    	 <div className="ProfileDiv" onClick={()=>props.rightSection('profile')}>
    	 	<img className="profilePic" src={props.personInfo.profilePic} alt="" />
            <div className="profileName">{props.personInfo.name}</div>

        </div>
    
       <div className="IconLeft">
            <i onClick={()=>setGrid(false)} className={!grid ? "fas fa-list checkIcon borderBottom" : "fas fa-list checkIcon"}> </i>
            
        </div>

       <div className="IconLeft">
           
            <i onClick={()=>setGrid(true)} className={grid ? "fas fa-th checkIcon borderBottom" : "fas fa-th checkIcon"}> </i>
        </div>

        <div class="IconLeft">  <i onClick={()=>setList(true)} className="fas fa-clipboard-list checkIcon" > </i>{list && <i class="fas fa-check"></i>}</div>
        <div class="IconLeft">  <i onClick={()=>setList(false)} className= "fas fa-clipboard-list checkIcon" > </i>{!list && <i class="fas fa-check"></i>}</div>
          <div class="IconLeft"> <img src="/flagged.svg" /></div>
        </div>
          <div class="rightSearch">	
          	
                 <input type="text" placeholder="Search checklist" />
                <div className="back2" onClick={()=>props.rightSection('')}></div>

          </div>

      
    </div>
    {grid && <GridView  rightSection={props.rightSection} />}
    {!grid && <ListView  rightSection={props.rightSection} />}
</>
)
}
export default CheckView
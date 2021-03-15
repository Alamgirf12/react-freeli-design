import React,{useState} from 'react'

function MuteNotification(props) {
const [custom,setCustom] = useState(false)
const [Itm,setItm] = useState('')
const active =(number)=>{
  
  setItm(number);
  if(number === "9"){
   setCustom(true)
}
if(number !== "9"){
   setCustom(false)
}
}



	return (

<div>
        <div className="modalshow"></div>
<div className="MuteNotification">
  <div className="row1">
    <div className="part1" style={{fontFamily:'var(--F1)',fontWeight:'700',letterSpacing:'0.7px',fontSize:'24px'}}>Mute Notificaton</div>
    <div className="part2"><span  style={{marginTop:'8px'}} className="info"  ></span></div>
  </div><hr/>
      <div className="textInfo">Please select one of the mute options.</div>

  <div className="contentMute">
  

   <div className="mm" onClick={()=>active('1')}>
    <div className={Itm === '1' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">For 30 Minutes </div>&nbsp;&nbsp;
   </div>

   <div className="mm" onClick={()=>active('2')}>
    <div className={Itm === '2' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">For 1 Hour </div>&nbsp;&nbsp;
   </div>
   
   <div className="mm" onClick={()=>active('3')}>
    <div className={Itm === '3' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">For 12 Hour </div>&nbsp;&nbsp;
   </div>

   <div className="mm" onClick={()=>active('4')}>
    <div className={Itm === '4' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">For 3 Days</div>&nbsp;&nbsp;
   </div>

 <div className="mm" onClick={()=>active('5')}>
    <div className={Itm === '5' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">For 5 Days</div>&nbsp;&nbsp;
   </div>

   <div className="mm" onClick={()=>active('6')}>
    <div className={Itm === '6' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">For 1 Week</div>&nbsp;&nbsp;
   </div>

   <div className="mm" onClick={()=>active('7')}>
    <div className={Itm === '7' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">For 2 Week</div>&nbsp;&nbsp;
   </div>
  
   <div className="mm" onClick={()=>active('8')}>
    <div className={Itm === '8' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">Until I turn it back on  </div>&nbsp;&nbsp;
   </div>

     <div className="mm" onClick={()=>active('9')}>
    <div className={Itm === '9' ? 'circle2' : 'circle1'}></div> 
   <div className="TextContent">Set your own mute option </div>&nbsp;&nbsp;
   </div>

   {custom && 
   <div className="setMute">
     <div className="setMute1"><label>Start Date & Time</label><br/><input type="date" name="" /></div>
     <div className="setMute2"><label>End Date & Time</label><br/><input type="date" name="" /></div>
   </div>
  
}

  </div> 
      
                <div className="customBtn">
                  <div className="btnRight">  
                <div  onClick={()=>props.modal('')} className="cancelChecklist" >Cancel</div>
                <div  className="saveChecklist" >Mute</div>
              
                </div>
                </div>
  

</div>
    </div>
	)
}

export default MuteNotification
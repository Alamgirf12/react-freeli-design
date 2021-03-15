import React from 'react'
function GridView(props) {
    
var info = [
    {username:"MD Maruf Hasan",src:'/sir.jpg'},
    {username:"Himel Talukder",src:'/himel.jpg'},
    {username:"AH Nayeem",src:'/sir.jpg'},
    {username:"Alamgir Hossain",src:'/sir.jpg'},
    {username:"Manzurul  Alam",src:'/sir.jpg'},
    {username:"Jahirul Islam",src:'/sir.jpg'},
    {username:"Dalim Chowdhury",src:'/dalim.jpg'},
    {username:"Ali  Azam",src:'/sir.jpg'},
    {username:"SM Jubayer",src:'/sir.jpg'},
    {username:"Kallol Ray94",src:'/ss.jpg'},
    {username:"TestUser Jahirul",src:'/sir.jpg'},
    {username:"x1 demo",src:'/sir.jpg'},
    {username:"User Demo",src:'/dalim.jpg'},
    {username:"Rajon",src:'/ss.jpg'},
    {username:"Demo1",src:'/sir.jpg'},
    {username:"Demo2",src:'/himel.jpg'}
];
return (
<div>
    <div className="ChecklistGrid">
       
        

{info.map(item => {
  return           <div className="ChecklistGridContent" onClick={()=>props.rightSection('ShowChecklist')}>
            <div class="lineContentChecklist">
                <div><img className="profilePic" src={item.src} /></div>
                <div>
                    <div className="checklistUser">{item.username}<i>-Readonly</i></div>
                    <div className="checklistTime">Created on 15-07-2020 02:08 pm</div>
                </div>
            </div>
            <div className="checklistText">

                <h3> <i class="fas fa-clipboard-list"></i> &nbsp;
                    <span className="checklistUser">Task List</span><br/>
                   </h3>
                <div className="Textdiv">All Pending(5)|My pending(0)|</div>
                <div className="Textdiv">My Response Required(0)|Over Due(0)-15-</div>

            </div>
        </div>
        })}

         


       




    </div>
</div>
)
}
export default GridView
import React from 'react'
function ListView(props) {
    
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
    <div className="gridList">
       
        

{info.map(item => {
  return           <div className="listItemCheck" onClick={()=>props.rightSection('ShowChecklist')}>
            
                    <div><i className="fas fa-clipboard-list"></i> &nbsp; Test</div>
                    <div>{item.username}</div>
                    <div>2-2-2021 11:20 AM </div>
                    <div>{item.username}</div>
                    <div>0 Completed out of 10</div>
        </div>







        })}

         


       




    </div>
</div>
)
}
export default ListView
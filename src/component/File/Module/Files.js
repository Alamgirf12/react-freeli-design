import React,{useState} from 'react';
import './Index.css';
import { Scrollbars } from 'react-custom-scrollbars';
function Files() {
	
var info = [
    {username:"MD Maruf Hasan",src:'/file3.png',},
    {username:"Himel Talukder",src:'/file3.png',},
    {username:"AH Nayeem",src:'/file2.png',},
    {username:"Alamgir Hossain",src:'/file2.png',},
    {username:"Manzurul  Alam",src:'/file3.png',},
    {username:"Jahirul Islam",src:'/file2.png',},
    {username:"Dalim Chowdhury",src:'/file2.png',},
    {username:"Ali  Azam",src:'/file3.png',},
    {username:"SM Jubayer",src:'/file2.png',},
    {username:"Kallol Ray94",src:'/file3.png',},
    {username:"TestUser Jahirul",src:'/file3.png',},
    {username:"x1 demo",src:'/file2.png',},
    {username:"User Demo",src:'/file3.png',},
    {username:"Rajon",src:'/file3.png',},
    {username:"Demo1",src:'/file3.png',},
    {username:"Demo2",src:'/file3.png',}
];
const [grid,setGrid] = useState(false)
    const renderIcon = () => {
        return ( <
            >
         <div class="">
            <div className="flag">
            <img className="Icon2" src="/download_fff.svg" alt="" />
        </div>

        <div className="flag">
            <img  className="Icon2" src="/editmsg_fff.svg" alt="" />
        </div>
        <div className="flag">
            <img className="Icon2" src="/share_fff.svg" alt="" />
        </div>

        </div><
            />
        )
    }

      const renderRight = () => {
        return (

            <div >
                
              <li ClassName=""><img className="Icon3" src="/download_fff.svg" alt="" /><span className="toggleText"> Download</span></li>
              <li ClassName=""><img className="Icon3" src="/share_fff.svg" alt="" /> <span className="toggleText">Share</span></li>
              <li ClassName=""><img className="Icon3" src="/close_white.svg" alt="" /><span className="toggleText">Close</span></li>
              
            

            </div>

        )
    }
const renderList =()=>{
    return(
        <div className="contentlist">
        <Scrollbars style={{ height: 440,width: '100%' }}>
        {
          info.map(item=>{
            return <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src={item.src}  alt=""/></div>
                    <div>
                          <div className="lineText">employe_salary.pdf </div>
                         <p>Uploaded by {item.username} on Invalid date</p>
                     </div>
                </div>
            </li>
          })
        }
           

          
        </Scrollbars>
    </div>

    )
}

const renderGrid =()=>{
    return(
          <Scrollbars style={{ height: 450,width: '100%' }}>
        <div className="contentGrid">
        {
          info.map(item=>{
            return<div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src={item.src} alt=""/>   
                </div>
                <div className="lineTextGrid">employe_salary.pdf </div>
            </div>
          })
        }

            

          





      </div>
  </Scrollbars>
        

    )
}




    return (
        <div className="">
    <div className="searchRow">
        <div style={{marginTop:'5px'}}> 
         <img src="file_search.svg "  className="imageFile" alt="workfreeli" />   
            
        </div>
        <input type="text" className="serchBox" placeholder="Search File(s)" />
        <div>
             <span className="info infoIcon"></span>
            <i onClick={()=>setGrid(false)} className={!grid  ? "fas fa-list imageIcon activeBackground" : "fas fa-list imageIcon"}> </i> 
            <i onClick={()=>setGrid(true)} className={grid  ? "fas fa-th imageIcon activeBackground" : "fas fa-th imageIcon"}> </i>
        </div>
    </div>
       <div className="RightPop">{renderRight()}</div>
       {grid && renderGrid()}
       {!grid && renderList()}
      
</div>
	)
}

export default Files
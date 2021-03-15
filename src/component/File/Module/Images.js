import React, { useState, useRef, useEffect } from 'react';
import './Index.css';
import { Scrollbars } from 'react-custom-scrollbars';

function Images() {



    var info = [
        { username: "MD Maruf Hasan", src: '/Lighthouse.jpg', },
        { username: "Himel Talukder", src: '/Desert.jpg', },
        { username: "AH Nayeem", src: '/Desert.jpg', },
        { username: "Alamgir Hossain", src: '/Desert.jpg', },
        { username: "Manzurul  Alam", src: '/Desert.jpg', },
        { username: "Jahirul Islam", src: '/Desert.jpg', },
        { username: "Dalim Chowdhury", src: '/Lighthouse.jpg', },
        { username: "Ali  Azam", src: '/Desert.jpg', },
        { username: "SM Jubayer", src: '/Koala.jpg', },
        { username: "Kallol Ray94", src: '/Desert.jpg', },
        { username: "TestUser Jahirul", src: '/Koala.jpg', },
        { username: "x1 demo", src: '/Desert.jpg', },
        { username: "User Demo", src: '/Desert.jpg', },
        { username: "Rajon", src: '/Lighthouse.jpg', },
        { username: "Demo1", src: '/Koala.jpg', },
        { username: "Demo2", src: '/Lighthouse.jpg', }
    ];


    const [grid, setGrid] = useState(false)
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

        </div>

            <
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
    const renderList = () => {
        return (
            <div className="contentlist">



        <div style={{ height: '440px',width: '100%',overflowY:'scroll' }}>

           {info.map(item=>{
            return   <li><label class="containerList">
                            <input type="checkbox"  />
                            <span class="checkmarkList"></span>
                        </label> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src={item.src}  alt=""/></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by {item.username} on Invalid date</p>
                     </div>
                </div>
            </li>

           })}
           
          
        </div>
    </div>

        )
    }

    const renderGrid = () => {
        return (
            <Scrollbars style={{ height: 450,width: '100%' }}>
        <div className="contentGrid">

        {
            info.map(item=>{
                return  <div>
                <label class="containerList">
                            <input type="checkbox"  />
                            <span class="checkmarkList"></span>
                        </label> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src={item.src}  alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
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
         <img src="file_search.svg "  className="imageFile" alt=""/>   
            
        </div>
        <input type="text" className="serchBox" placeholder="Search Image(s)" />
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
export default Images;
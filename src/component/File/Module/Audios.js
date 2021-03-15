import React,{useState} from 'react';
import './Index.css';
import { Scrollbars } from 'react-custom-scrollbars';

function Audios() {


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

        </div> <
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
        <div style={{ height: '440px',width: '100%',overflowY:'scroll' }}>
            <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContentAudio">
                    <div><audio controls ></audio></div>
                    <div>
                          <div className="lineText">System Faul.mp3.png (390 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

              <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContentAudio">
                    <div><audio controls ></audio></div>
                    <div>
                          <div className="lineText">System Faul.mp3.png (390 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

              <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContentAudio">
                    <div><audio controls ></audio></div>
                    <div>
                          <div className="lineText">System Faul.mp3.png (390 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

              <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContentAudio">
                    <div><audio controls ></audio></div>
                    <div>
                          <div className="lineText">System Faul.mp3.png (390 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

              <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContentAudio">
                    <div><audio controls ></audio></div>
                    <div>
                          <div className="lineText">System Faul.mp3.png (390 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>
          
        </div>
    </div>

    )
}

const renderGrid =()=>{
    return(
          <Scrollbars style={{ height: 450,width: '100%' }}>
        <div className="contentGrid">

            <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGridAudio">
                
                    <div><audio controls ></audio></div>
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

            <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGridAudio">
               
                    <div><audio controls ></audio></div>
                    
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>
               <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGridAudio">
                
                    <div><audio controls ></audio></div>
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

            <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGridAudio">
               
                    <div><audio controls ></audio></div>
                    
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>
            <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGridAudio">
                
                    <div><audio controls ></audio></div>
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

            <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGridAudio">
               
                    <div><audio controls ></audio></div>
                    
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

        






      </div>
  </Scrollbars>
        

    )
}




    return (
        <div className="">
    <div className="searchRow">
        <div style={{marginTop:'5px'}}> 
         <img src="file_search.svg "  className="imageFile" alt="" />   
            
        </div>
        <input type="text" className="serchBox" placeholder="Search Audio(s)" />
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

export default Audios
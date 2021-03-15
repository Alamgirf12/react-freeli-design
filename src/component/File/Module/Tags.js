import React,{useState} from 'react';
import './Index.css';
import { Scrollbars } from 'react-custom-scrollbars';

function Tags() {


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
        <Scrollbars style={{ height: 440,width: '100%' }}>
            <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="Koala.jpg"  alt="" /></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="ss.jpg"  alt=""/></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>


             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="Desert.jpg"  alt=""/></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>



             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="Koala.jpg"  alt=""/></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>


             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="Lighthouse.jpg"  alt=""/></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

          
        </Scrollbars>
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

                <div className="lineContentGrid">
                    <img src="Desert.jpg" alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

            <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Koala.jpg"  alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>


             <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Lighthouse.jpg"  alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

             <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Lighthouse.jpg"  alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

             <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Lighthouse.jpg"  alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

             <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Lighthouse.jpg"  alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>


             <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Lighthouse.jpg"  alt=""/>   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>

             <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Lighthouse.jpg" alt="" />   
                </div>
                <div className="lineTextGrid">Screenshot_29.pngaa.png.png (39 KB) </div>
            </div>


             <div>
                <div className="circleGrid"></div> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src="Lighthouse.jpg"  alt=""/>   
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
         <img src="file_search.svg"  className="imageFile" alt="" />   
            
        </div>
        <input type="text" className="serchBox" placeholder="Search Tag(s)" />
        <div>
             <span className="info infoIcon"></span>
            <i onClick={()=>setGrid(false)} className={!grid  ? "fas fa-list imageIcon activeBackground" : "fas fa-list imageIcon"}> </i> 
            <i onClick={()=>setGrid(true)} className={grid  ? "fas fa-th imageIcon activeBackground" : "fas fa-th imageIcon"}> </i>
        </div>
    </div>
       {grid && renderGrid()}
       {!grid && renderList()}
      
</div>
	)
}

export default Tags
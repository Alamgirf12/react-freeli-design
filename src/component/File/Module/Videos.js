import React,{useState} from 'react';
import './Index.css';
import { Scrollbars } from 'react-custom-scrollbars';

function Videos() {


    var info = [
        { username: "MD Maruf Hasan", src: '/wmv.svg', },
        { username: "Himel Talukder", src: '/wmv.svg', },
        { username: "AH Nayeem", src: '/wmv.svg', },
        { username: "Alamgir Hossain", src: '/wmv.svg', },
        { username: "Manzurul  Alam", src: '/wmv.svg', },
        { username: "Jahirul Islam", src: '/wmv.svg', },
        { username: "Dalim Chowdhury", src: '/wmv.svg', },
        { username: "Ali  Azam", src: '/wmv.svg', },
        { username: "SM Jubayer", src: '/wmv.svg', },
        { username: "Kallol Ray94", src: '/wmv.svg', },
        { username: "TestUser Jahirul", src: '/wmv.svg', },
        { username: "x1 demo", src: '/wmv.svg', },
        { username: "User Demo", src: '/wmv.svg', },
        { username: "Rajon", src: '/wmv.svg', },
        { username: "Demo1", src: '/wmv.svg', },
        { username: "Demo2", src: '/wmv.svg', }
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
        {info.map(item=>{
            return<li><label class="containerList">
                            <input type="checkbox"  />
                            <span class="checkmarkList"></span>
                        </label> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src={item.src}  alt="wmv.svg" /></div>
                    <div>
                <div className="lineText">Bangladesh Cricket Victory.Mp4 (439 MB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>
        })}
            

           


          
        </Scrollbars>
    </div>

    )
}

const renderGrid =()=>{
    return(
          <Scrollbars style={{ height: 450,width: '100%' }}>
        <div className="contentGrid">

           {info.map(item=>{
            return <div>
               <label class="containerList">
                            <input type="checkbox"  />
                            <span class="checkmarkList"></span>
                        </label> 
                <span className="rghtIconHoverGrid">{renderIcon()}</span>

                <div className="lineContentGrid">
                    <img src={item.src}  alt="wmv.svg" />
                </div>
                <div className="lineTextGrid">Bangladesh Cricket Victory.Mp4 (439 MB) </div>
            </div>
           })} 

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
        <input type="text" className="serchBox" placeholder="Search Video(s)" />
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

export default Videos
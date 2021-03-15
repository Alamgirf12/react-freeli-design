import React,{useState} from 'react'
import {Data} from '../../data/Data'
function AddTag(props) {
const [MyTag, setTag] = useState(true)
    var info = [
        { username: "MD Maruf Hasan", src: '/Lighthouse.jpg', tag:'tag1',shareWithMe:'tag1share'},
        { username: "Himel Talukder", src: '/Desert.jpg', tag:'tag1',shareWithMe:'tag6'},
        { username: "AH Nayeem", src: '/Desert.jpg', tag:'tag1'},
        { username: "Alamgir Hossain", src: '/Desert.jpg',tag:'tag1',shareWithMe:'tag4' },
        { username: "Manzurul  Alam", src: '/Desert.jpg', tag:'tag1'},
        { username: "Jahirul Islam", src: '/Desert.jpg',tag:'tag1' },
        { username: "Dalim Chowdhury", src: '/Lighthouse.jpg',tag:'tag1' ,shareWithMe:'tag8'},
        { username: "Ali  Azam", src: '/Desert.jpg', tag:'tag1'},
        { username: "SM Jubayer", src: '/Koala.jpg', tag:'tag1'},
        { username: "Kallol Ray94", src: '/Desert.jpg',tag:'tag1' },
        { username: "TestUser Jahirul", src: '/Koala.jpg', tag:'tag1'},
        { username: "x1 demo", src: '/Desert.jpg',tag:'tag1' },
        { username: "User Demo", src: '/Desert.jpg', tag:'tag1'},
        { username: "Rajon", src: '/Lighthouse.jpg',tag:'tag1' },
        { username: "Demo1", src: '/Koala.jpg', tag:'tag1'},
        { username: "Demo2", src: '/Lighthouse.jpg', tag:'tag1'}
    ];
        var Tag = [
        {ShareTag:'tag4'},
        {ShareTag:'tag99'},
        {ShareTag:'tag6'},
        {ShareTag:'tag22'},
        {ShareTag:'tag53'},
        
    ];
        const renderIcon = () => {
        return ( <
            >
            <div class="">
         

        <div className="flag">
            <img  className="IconTag" src="/editmsg_fff.svg" alt="" />
        </div> 
        <div className="flag">
            <img className="IconTag" src="/share_fff.svg" alt="" />
        </div>
           <div className="flag">
            <img className="IconTag" src="/hayven_trash.svg" alt="" />
        </div>

        </div>

            <
            />
        )
    }

return (
<div>
    <div className="modalshow"></div>
    <div className="directmessbox">
        <div className="row1">
            <div className="part1"> <span className={MyTag ? "TagHead Bottom" : "TagHead"} onClick={()=>setTag(true)}>My Tag(s)</span> <span className={MyTag ? "TagHead " : "TagHead Bottom"} onClick={()=>setTag(false)}>Shared with me</span> </div>
            <div className="part2"><span style={{marginTop:'8px'}} className="remove" onClick={()=>props.modal('')}></span></div>
        </div>
        <hr />
        {MyTag &&
        <div className="TagRow2">
            <input type="text" placeholder="Search tag(s) or Add new one" />
        </div>}
        {!MyTag &&  <div className="TagRow2">
            <input type="text" placeholder="Search tag(s)" />
                 </div>}


           {MyTag &&
         <div className="row3">
            { info.map((item)=>(
            <div className="large_btn5">
                                <div class="IconHover">{renderIcon()}</div>

                <span className="TagList">{item.tag}</span>
            </div>
            ))}
        </div>}
        {!MyTag &&  <div className="row3">
            { Tag.map((item)=>(
            <div className="large_btn5">
                <div class="IconHover">{renderIcon()}</div>
             <span className="TagList">{item.ShareTag}</span>

            </div>
            ))}
        </div>}
         <div style={{marginTop:'20px',float:'right',marginRight:'40px'}}>
                    
                <div  onClick={()=>props.modal(' ')} className="cancelChecklist" >Cancel</div>
                <div  className="saveChecklist" >Submit</div>
              
                </div>

    </div>
</div>
)
}
export default AddTag
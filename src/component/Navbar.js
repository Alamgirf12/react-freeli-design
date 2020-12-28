import React,{useState,useRef,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
function Navbar() {



const [ShowResult,SetShowResult] = useState(false);
const [search, setSearch] = useState('');
const [searchIcon, setsearchIcon] = useState(false);
const [img, setImg] = useState('false');
const dispatch = useDispatch();
const conv = useSelector(state => state.convReducer);

const pinItem = useSelector(state => state.convReducer.pin);
let newPin = pinItem.filter(item => item.pinned == true );
let havePin = newPin.filter(item => item.name == conv.name );

    



const onSearch = (e)=>{
setSearch(e.target.value)
}
const removeSearchValue = ()=>{
setsearchIcon(false);
SetShowResult(false);
setSearch('');
}
const bb = useRef(null);
const bbtn = useRef(null);
const wid = useRef(null);
 const inputRef = useRef(null);
 const leftWidth = useRef(null);
   useEffect(() => {
   var navWidth = inputRef.current.offsetWidth
   var searchWidth = leftWidth.current.offsetWidth
   var mainWidth = navWidth - searchWidth;
   var ddi =  mainWidth-35

if(wid.current){
wid.current.style.width = ddi+'px';
}
   });


const clickFunction =(event)=>{

                 if (bb.current && !bb.current.contains(event.target)){
            if (bbtn.current && !bbtn.current.contains(event.target))
             {
                 SetShowResult(false)
            }}
 

}

  const checkSize = () => {
     var navWidth = inputRef.current.offsetWidth
   var searchWidth = leftWidth.current.offsetWidth
   var mainWidth = navWidth - searchWidth;
   var ddi =  mainWidth-35
    if(wid.current){
wid.current.style.width = ddi+'px';
}

  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);


 
  
  

useEffect(() => {
  
   document.addEventListener("mousedown", clickFunction, false);

  
},[])

const dropmenu =()=>{
return(
<div className="dropoption" ref={bb}>
    <div className="itm">Message tag(s)</div>
    <div className="itm">Image(s)</div>
    <div className="itm">Video(s)</div>
    <div className="itm">Audio(s)</div>
    <div className="itm">File(s)</div>
    <div className="itm">Link(s)</div>
    <div className="itm">View By Tag(s)</div>
</div>
)
}
const renderSearchBar =() => {
return(<>
<div className="searchArea"   ref={wid} >
    <div className="dropbtn" ref={bbtn} >
        <span onClick={()=>SetShowResult(!ShowResult)}>Conversation</span>
        <img onClick={()=>SetShowResult(!ShowResult)} src="/Down_Chevron.svg" className={className} />
        { ShowResult ? <div>{dropmenu()} </div> : null }
    </div>
    <input type="text" className="search-menu" value={search} onChange={onSearch} placeholder="Type and enter to search meassage(s) in conversation" />
    <div className="remove" onClick={removeSearchValue}></div>
</div></>
) }
const onPin = ()=>{
if(havePin == false){

  let newPin={
   id:conv.id,
   name:conv.name,
   pinned:true,
   profilePic:conv.profilePic
        }
    
        
  dispatch({type:'PIN',payload:newPin})


}

else{
 
   let newPin={
   id:conv.id,
   name:conv.name,
   pinned:false
        }
  dispatch({type:'UNPIN',payload:newPin})




}
}
const fileShow=()=>{
      dispatch({type:'SHOW_FILE',payload:true})


}
const profileView=()=>{
        dispatch({type:'SHOW_PROFILE',payload:true})

}
var pinclass = havePin == false ? 'unpin' : 'pin';
const renderIcon = () => {
return(<>
    <div className="navIcon"  >
        <ul>
            <li className="audio"></li>
            <li className="video"></li>
            <li className={pinclass} onClick={onPin}></li>
            <li onClick={()=>setsearchIcon(true)} className="searchIcon"></li>
            <li className="more"></li>
        </ul>
    </div>
    <div style={{fontSize:'19px',cursor:'pointer',width:'auto',display:'inline-block',color:'var(--PrimaryC)'}} onClick={fileShow}>File</div>
</>
)}
var className = ShowResult == false ? 'up' : 'down';
return (
<div>
    <div className="navbar" ref={inputRef}>
       <div>
       <div className="left" ref={leftWidth} onClick={profileView} ><img className="profilePic" src={conv.profilePic} />
            <div className="profileName" >{conv.name}</div></div>
       <div className="right"> { !searchIcon &&  <div >{renderIcon()} </div>}

        { searchIcon && <div>{renderSearchBar()} </div>}</div>
      

       </div>
       
    </div>
</div>
)
}
export default Navbar
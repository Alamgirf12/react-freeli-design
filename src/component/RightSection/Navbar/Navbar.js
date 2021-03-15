import React, { useState, useRef, useEffect } from 'react';

function Navbar(props) {
    const [ShowResult, SetShowResult] = useState(false);
    const [search, setSearch] = useState('');
    const [havePin, sethavePin] = useState(false);

    const [searchIcon, setsearchIcon] = useState(false);
    const [open, setOpen] = useState(false);
    const [mute, setMute] = useState(false);
    const [name, setName] = useState('Alamgir Hossain')

    const optionOpen = () => {
        setOpen(!open)
    }
    const onPin = () => {
        sethavePin(!havePin);
    }
    const MuteToggle = () => {
        setMute(!mute)
    }
    const onSearch = (e) => {
        setSearch(e.target.value)
    }


    const voicecall = () => {
        window.open("https://bd.freeli.io/call/7732bd10-401b-11ea-8ee4-dd2f2623c99c_personal", "", "width=800,height=800");
    }
    const videocall = () => {
        window.open("https://bd.freeli.io/call/7732bd10-401b-11ea-8ee4-dd2f2623c99c_personal", "", "width=800,height=800", );
    }



    const removeSearchValue = () => {
        setsearchIcon(false);
        SetShowResult(false);
        setSearch('');
    }
    const clickHandle = useRef(null);
    const clickHandle2 = useRef(null);
    const wid = useRef(null);
    const inputRef = useRef(null);
    const leftWidth = useRef(null);

    useEffect(() => {

        var navWidth = inputRef.current.offsetWidth
        var searchWidth = leftWidth.current.offsetWidth
        var mainWidth = navWidth - searchWidth;
        var ddi = mainWidth - 35
        if (wid.current) {
            wid.current.style.width = ddi + 'px';
        }
    });

    const clickFunction = (event) => {
        if (clickHandle.current && !clickHandle.current.contains(event.target)) {
            if (clickHandle2.current && !clickHandle2.current.contains(event.target)) {
                SetShowResult(false)
            }
        }
    }
    const checkSize = () => {
        var navWidth = inputRef.current.offsetWidth
        var searchWidth = leftWidth.current.offsetWidth
        var mainWidth = navWidth - searchWidth;
        var ddi = mainWidth - 35
        if (wid.current) {
            wid.current.style.width = ddi + 'px';
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
    }, [])

    const dropmenu = () => {
        return (
            <div className="dropoption" ref={clickHandle}>
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

    const dropOption = () => {
        return (
            <div className="dropDown" ref={clickHandle}>
    <div className="itm"><img src="/doubleCheckIn.svg" className="clearMsgIn" alt="" />Select Message</div>
    <div className="itm" onClick={()=>props.modal('MuteNoti')}><i class="fas fa-bell"></i>&nbsp; Mute Notification</div>
    <div className="itm drop1"><i class="fas fa-bell"></i>&nbsp; Mute Notification Sound
        <div className="droplist1">
            <div>sound.mp3</div>
            <div>bird.mp3</div>
        </div>
    </div>
    <div className="itm"><i class="fas fa-bell"></i>&nbsp; Set Notification Tune</div>
    <div className="itm drop"><i class="fas fa-filter"></i>&nbsp; Filter
        <div className="droplist">
            <div><img src="/flagged.svg" className="clearMsgIn" alt="" />Flag</div>
            <div><i class="fas fa-filter"></i>&nbsp; Filter call history only</div>
            <div><i class="fas fa-comments"></i>&nbsp;  Filter Thread Message Only</div>
        </div>
    </div>
    <div className="itm"><img src="/clearMsgIn.svg" className="clearMsgIn" alt="" />Clear Message(s)</div>
    <div className="itm"><img src="/clearMsgIn.svg" className="clearMsgIn" alt="" />Remove all deleted  Message(s)</div>
</div>
        )
    }

    const renderSearchBar = () => {
        return ( < >
            <div className="searchArea" ref={wid}>
        <div className="dropbtn" ref={clickHandle2}>
            <span onClick={()=>SetShowResult(!ShowResult)}><i class="fas fa-search"></i>&nbsp; Conversation</span>
            <img  onClick={()=>SetShowResult(!ShowResult)} src="/Down_Chevron.svg" className={className} alt=""/>
            { ShowResult ? <div>{dropmenu()} </div> : null }
        </div>
        <input type="text" className="search-menu" value={search} onChange={onSearch} placeholder="Type and enter to search meassage(s) in conversation" />
        <div className="remove" onClick={removeSearchValue}></div>
    </div> <
            />
        )
    }

    var pinclass = havePin === false ? 'unpin' : 'pin';
    const renderIcon = () => {
        return ( < >
            <div className="navIcon">
            <div  onClick={voicecall} className="audio"></div>
            <div onClick={videocall} className="video"></div>
            <div className={pinclass} onClick={onPin}></div>
            <div onClick={()=>setsearchIcon(true)} className="searchIcon"></div>
            <div className="more" onClick={optionOpen}></div>
            { open ? <span>{dropOption()} </span> : null }
        </div> 
            <div className = "navText" onClick = {() => props.rightSection('user_File')}> File </div>  
            <div className = "navText" onClick = {() => props.rightSection('ChecklistView')}> Cheklist <span className="checkTextbox">0/12</span></div> 
            <div className = "navBtn" onClick = {() => props.rightSection('Room')}> <i class="fas fa-plus"></i>Create sub-room </div> 


            </>
        )
    }

    var className = ShowResult === false ? 'up' : 'down';
    return ( <>
        <div>
                        <div className="navbar" ref={inputRef}>
                            <div>
                                <div className="left" ref={leftWidth} onClick={()=>props.rightSection('profile')}><img  className="profilePic" src={props.personInfo.profilePic} alt="" />
                                    <div className="profileName">{props.personInfo.name}</div>
                                </div>
                                <div className="right"> { !searchIcon && <div>{renderIcon()} </div>}
                                    { searchIcon && <div>{renderSearchBar()} </div>}</div>
                            </div>
                        </div>
        </div> 
        </>
    )
}
export default Navbar
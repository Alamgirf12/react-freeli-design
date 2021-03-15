import React, { useRef } from 'react';
function CreateRoom(props) {
const fileInput = useRef(null);
const ClickOnFile = () => {
fileInput.current.click();
}
return ( <>
    <div className="top">
        <div className="back1" onClick={()=>props.rightSection('')}>
        </div>
        <div className="Name">
            <span>Create a work room</span>
        </div>
        <div className="back2" onClick={()=>props.rightSection('')}>
        </div>
    </div>
    < div className="Room">
        <div className="leftsite">
            <div className="bodycreate">
                <input type="radio" id="huey" name="drone" value="huey" checked />&nbsp;
                <label>Work Room</label> &nbsp; &nbsp;
                <input type="radio" id="huey" name="drone" value="huey" checked />&nbsp;
                <label htmlFor="huey">Project Room </label><br />
                <input type="radio" id="huey" name="drone" value="huey" checked />&nbsp;
                <label htmlFor="huey">Support Room </label>
            </div>
            <div className="inputsite">
                <span>Work Category (*)</span><br />
                <input type="" className="createinput" /><br />
                <span>Title of Room (*)</span><br />
                <input type="" className="createinput" /><br />
                <span>Team (*)</span><br />
                <input type="" className="createinput" /><br />
                <div className="large_btn1">
                    Invite Member(s) to this Room
                </div>
                <h6>Room Member(s)</h6>
                <div className="large_btn2">
                    <img src="ss.jpg" alt=""/><span>Alamgir Hossain</span>
                </div>
            </div>
        </div>
        <div className="rightsite">
            <div>Set an Avatar</div>
            < br />
                <div onClick={ClickOnFile}>
                    <input type="file" style={{display:'none'}} ref={fileInput} />
                    <img src="https://wfss001.freeli.io/room-images-uploads/Photos/feelix.jpg"alt="" />
                    <div className="upload">Upload</div>
                </div>
                < div className="group_input">
                    <label className="switchNav">
                        <input type="checkbox" />
                        <span className="sliderNav round"></span>
                        <span className="switchFor"> Make this a private room
                            <p>Only invited memeber has to access this room</p>
                        </span>
                    </label>
                    < /div> < div className="large_btn">
                        Invite Geust Member to this Room
                        < /div> < div className="bottomFixed">
                            <div onClick={()=>props.rightSection('')} className="cancelGroup">Cancel</div>
                            < div className="saveGroup"> Create Group
                                < /div> < /div> < /div> < /div> < />
                                );
                                }
                                export default CreateRoom
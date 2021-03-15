import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

function GridImage() {
        const renderIcon = () => {
        return ( <>
            <div class="msgs-form-users-options">
        <div className="call-rep-emoji">
            <img src="/AddEmoji.svg" alt="" />
        </div>
        <div className="flag">
            <img src="/NotFlagged.svg" alt="" />
        </div>
        <div className="call-rep-emoji">
            <img src="/AddEmoji.svg" alt="" />
        </div>
    </div> </>
        )
    }
    return (
        <div>
            <div className="contentlist">
        <Scrollbars style={{ height: 440,width: '100%' }}>
            <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="ss.jpg" /></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="ss.jpg" /></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="ss.jpg" /></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="ss.jpg" /></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContent">
                    <div><img src="ss.jpg" /></div>
                    <div>
                          <div className="lineText">Screenshot_29.pngaa.png.png (39 KB) </div>
                         <p>Uploaded by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>
        </Scrollbars>
    </div>
        </div>
    )
}

export default GridImage
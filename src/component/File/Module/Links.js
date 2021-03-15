import React from 'react';
import './Index.css';
import { Scrollbars } from 'react-custom-scrollbars';

function Links() {

    const renderIcon = () => {
        return ( <
            >
          <div class="">
            

        <div className="flag">
            <img  className="Icon2" src="/editmsg_fff.svg" alt="" />
        </div>
        <div className="flag">
            <img className="Icon2" src="/share_fff.svg" alt="" />
        </div>
        <div className="flag">
            <img className="Icon2" src="/heyven_trash.svg" alt="" />
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
            <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContentlink">

                    <div>
                          <div className="lineText">https://mbasic.facebook.com/messages/read/?tid=4701347923239283&request_type=send_success&_rdr</div>
                         <p>Shared by by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>

             <li><div className="circle"></div> 
                <span className="rghtIconHover">{renderIcon()}</span>

                <div className="lineContentlink">
              
                    <div>
                          <div className="lineText">https://mbasic.facebook.com/messages/read/?tid=4701347923239283&request_type=send_success&_rdr</div>
                         <p>Shared by Md. Mahfuz Hossain Sujon on Invalid date</p>
                     </div>
                </div>
            </li>


           

          
        </Scrollbars>
    </div>

    )
}






    return (
        <div className="">
    <div className="searchRowLink">
        <div style={{marginTop:'5px'}}> 
         <img src="file_search.svg "  className="imageFile" alt=""/>   
            
        </div>
        <input type="text" className="serchBox" placeholder="Search Link(s)" />
        
    </div>
        
       {renderList()}
      
</div>	)
}

export default Links
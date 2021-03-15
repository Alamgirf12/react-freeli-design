import React, { useState } from 'react';
import Images from './Module/Images';
import Videos from './Module/Videos';
import Audios from './Module/Audios';
import Files from './Module/Files';
import Tags from './Module/Tags';
import Links from './Module/Links'
function CustomDiv(props) {
const [Found, setFound] = useState(false)
const [divName, setDivName] = useState('images')
return (
<div>
    <div className="content">
        <div className="back1" onClick={()=>props.rightSection('')}>
        </div>
        <div className="menu-option">
            <ul class="media-tabs">
                <li onClick={()=>setDivName('images')}  className={divName==='images' ? "active" : "" } data-balloon="View Images" data-balloon-pos="down">
                    <span > Images(8) <img src="/circleCheckgreen.svg" className ="ok" />  </span></li>
                
                <li onClick={()=>setDivName('videos')} className={divName==='videos' ? "active" : "" } data-balloon="View Videos" data-balloon-pos="down">
                    <span > Videos(8) <img src="/circleCheckgreen.svg" className ="ok" />  </span></li>
                <li onClick={()=>setDivName('audios')}  className={divName==='audios' ? "active" : "" } data-balloon="View Audios" data-balloon-pos="down">
                    <span > Audios(8) <img src="/circleCheckgreen.svg" className ="ok" />  </span></li>
                <li onClick={()=>setDivName('files')} className={divName==='files' ? "active" : "" } data-balloon="View Files" data-balloon-pos="down">
                    <span > Files(8) <img src="/circleCheckgreen.svg" className ="ok" />  </span></li>
                <li onClick={()=>setDivName('links')} className={divName==='links' ? "active" : "" } data-balloon="View Links" data-balloon-pos="down">
                    <span > Links(8) <img src="/circleCheckgreen.svg" className ="ok" />  </span></li>
                <li onClick={()=>setDivName('tags')} className={divName==='tags' ? "active" : "" }  data-balloon="View By Tag(s)" data-balloon-pos="down">
                    <span > Tags(8) <img src="/circleCheckgreen.svg" className ="ok" />  </span></li>
            </ul>
        </div>
        <div className="back2" onClick={()=>props.rightSection('')}>
        </div>
    </div>
    <>
        {divName==='images' && <>
            {Found ? <div className="notFound"><span>No image(s) were found in this channel</span> </div> :
            <div>
                <Images />
            </div>
            }</>}
        {divName==='audios' && <>
            {Found ? <div className="notFound"><span>No Audio(s) were found in this channel</span> </div> :
            <div>
                <Audios />
            </div>}</>}
        {divName==='videos' && <>
            {Found ? <div className="notFound"><span>No video(s) were found in this channel</span> </div> :
            <div>
                <Videos />
            </div>}</>}
        {divName==='files' && <>
            {Found ? <div className="notFound"><span>No file(s) were found in this channel</span> </div> :
            <div>
                <Files />
            </div>
            }</>}
        {divName==='links' && <>
            {Found ? <div className="notFound"><span>No link(s) were found in this channel</span> </div> :
            <div>
                <Links />
            </div>}</>}
        {divName==='tags' && <>
            {!Found ? <div className="notFound"><span>No tag(s) were found in this channel</span> </div> :
            <div>
                <Tags />
            </div>}</>}
    </>
</div>
)
}
export default CustomDiv
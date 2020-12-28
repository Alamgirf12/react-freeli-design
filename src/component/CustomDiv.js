import React,{useState}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Images from './module/Images';
import Videos from './module/Videos';
import Audios from './module/Audios';
import Files from './module/Files';
import Tags from './module/Tags';
import Links from './module/Links'


function CustomDiv() {
		const dispatch = useDispatch();
		const [ImagesFound, setImagesfound] = useState(false)
const Divshow = useSelector(state => state.convReducer.DivName);

const DivName = (name)=>{
		
		      dispatch({type:'DIV_NAME',payload:name})

	}
	const remove = ()=>{
		      dispatch({type:'SHOW_FILE',payload:false})

	}

	return (
		<div>
  <div className="content">
 <div className="back1" onClick={remove} >
 </div>
<div className="menu-option">
		<ul class="media-tabs">
					<li onClick={()=>DivName('images')}  data-balloon="View Images" data-balloon-pos="down">
						<span className={Divshow === 'images' ? "active" : ""} >Images (0) </span>
					</li>
					<li onClick={()=>DivName('videos')}  data-balloon="View Videos" data-balloon-pos="down">
		             <span className={Divshow === 'videos' ? "active" : ""} >Videos (0) </span></li>

					<li onClick={()=>DivName('audios')}  data-balloon="View Audios" data-balloon-pos="down">
							             <span className={Divshow === 'audios' ? "active" : ""} >Audios (0) </span></li>
					<li onClick={()=>DivName('files')} data-balloon="View Files" data-balloon-pos="down">
							             <span className={Divshow === 'files' ? "active" : ""} >File (0) </span></li>

					<li onClick={()=>DivName('links')}  data-balloon="View Links" data-balloon-pos="down">
							             <span className={Divshow === 'links' ? "active" : ""} >Link (0) </span></li>

					<li onClick={()=>DivName('tags')}  data-balloon="View By Tag(s)" data-balloon-pos="down">
					
							             <span className={Divshow === 'tags' ? "active" : ""} >View By Tag(s)</span></li>

				</ul>
 </div>
 <div className="back2" onClick={remove} >
 </div>
  </div>
  <>
  {Divshow == 'images' && <>
   {!ImagesFound ?  <div className="notFound"><span>No image(s) were found in this channel</span>  </div> :
    <div> <Images/>  </div>
}</>}
  {Divshow == 'audios' && <>
   {!ImagesFound ?  <div className="notFound"><span>No Audio(s) were found in this channel</span>  </div> :
   <div> <Audios/>  </div>}</>}
  {Divshow == 'videos' && <>
   {!ImagesFound ?  <div className="notFound"><span>No video(s) were found in this channel</span>  </div> :
   <div> <Videos/>  </div>}</>}
  {Divshow == 'files' && <>
   {!ImagesFound ?  <div className="notFound"><span>No file(s) were found in this channel</span>  </div> :
   	<div> <Files/></div>
}</>}
  {Divshow == 'links' && <>
   {!ImagesFound ?  <div className="notFound"><span>No link(s) were found in this channel</span>  </div> :
   <div> <Links/>  </div>}</>}
{Divshow == 'tags' && <>
   {!ImagesFound ?  <div className="notFound"><span>No tag(s) were found in this channel</span>  </div> :
   <div> <Tags/>  </div>}</>}
</>
		</div>


	)
}

export default CustomDiv
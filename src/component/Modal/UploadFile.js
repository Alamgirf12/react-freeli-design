import React,{useRef} from 'react'

function UploadFile(props) {
	const fileInput = useRef(null);

	const ClickOnFile = () => {
fileInput.current.click();
}

	return (
		<div>
		<div className="modalshow"></div>
<div className="uploadFile">
    <div className="row1">
        <div className="part1">Upload File</div>
        <div className="part2"><span   className="remove"  onClick={()=>props.modal('')}></span></div>
    </div> <hr />
     <div className="uploadBtn" onClick={ClickOnFile}>
         <span>Click here to upload file(s) from your device.</span>
        <input type="file" style={{display:'none'}} ref={fileInput} />     
    </div>
    <div className="rowComent">
       <div style={{color:'gray'}}>Comment</div>
       <div contenteditable="true" className="inputComent"></div> 
       <div className="FileSave">Upload</div>
    </div>
     
  

</div>
		</div>
	)
}

export default UploadFile
import React, {useState} from 'react'

export default function TextForms(props) {
    const [text, setText] = useState("")
    const handleLoClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase!")
    }
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase!")
    }
    const handleCapClick = ()=>{
        let separateWord = text.toLowerCase().split(' ');
        for(var i=0; i<separateWord.length; i++){
            separateWord[i] = separateWord[i].charAt(0).toUpperCase()+separateWord[i].substring(1);
        }
        setText(separateWord.join(" "))
        props.showAlert("Text is Capitalized!")
    }
    const handleClearClick = ()=>{
        let clearText = ""
        setText(clearText)
        props.showAlert("All text is Cleared!")
    }
    const handleCopyClick = ()=>{
        let mySelec = document.getElementById("myBox")
        mySelec.select()
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied Sucessfully!")
    }
    const handleRemoveExtraSpaceClick = ()=>{
        let removeExtraSpaces = text.split(/\s+/)
        setText(removeExtraSpaces.join(" "))
        props.showAlert("Extra Spaces are removed!")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    let getTextLength 
    if(text.split(/\s+/).join(" ")===" "){
        getTextLength=0
    }
    else{
        getTextLength=text.split(/\s+/).join(" ").length
    }
    return (
       <div className="container my-4">
           <h1 style={{color : props.mode==="light"?"black":"white"}}>{props.heading}</h1>
           <textarea className="form-control my-2" id="myBox" value={text} rows="7" onChange={handleOnChange} placeholder="Enter your Text here"></textarea>
           <button disabled={text.length===0} type="button" onClick={handleLoClick} className="btn btn-primary my-2 mx-2">Convert to LowerCase</button>
           <button disabled={text.length===0} type="button" onClick={handleUpClick} className="btn btn-primary my-2 mx-2">Convert to UpperCase</button>
           <button disabled={text.length===0} type="button" onClick={handleCapClick} className="btn btn-primary my-2 mx-2">Capitalize First Word</button>
           <button disabled={text.length===0} type="button" onClick={handleClearClick} className="btn btn-primary my-2 mx-2">Clear Text</button>
           <button disabled={text.length===0} type="button" onClick={handleCopyClick} className="btn btn-primary my-2 mx-2">Copy Text</button>
           <button disabled={text.length===0} type="button" onClick={handleRemoveExtraSpaceClick} className="btn btn-primary my-2 mx-2">Remove Extra Spaces</button>
           <hr />
           <div className="container my-2">
                <h1 style={{color : props.mode==="light"?"black":"white"}}>{props.title}</h1>
                <p style={{color : props.mode==="light"?"black":"white"}}><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{getTextLength}</b> characters</p>
                <p style={{color : props.mode==="light"?"black":"white"}}><b>{(0.008*getTextLength).toFixed(2)}</b> minutes to read</p>
            </div>
       </div>
    )
}
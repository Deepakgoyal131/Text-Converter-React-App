import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);  //means text + "any other text you target :"
    }

    const clearClick = () => {
        setText("");
        props.showAlert("Clear all Text", "success");
    }

    const selecteClick = () => {
        let textselect = document.getElementById('mybox');
        textselect.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Select all text", "success");
    }

    const removeSpaceClick = () => {
        let removeSpace = text.split(/[ ]+/); //it is for remove all space from textarea
        setText(removeSpace.join(" ")); //it is for join every text with a single space.
        props.showAlert("Remove Extra Space", "success");
    }

    //State
    const [text, setText] = useState(''); //means text = Enter text here & setText is the function to change or update the value of text:

    //text = "new text"; //Wrong way to change the state
    //setText("new text"); // Correct way to change the state

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>  
                <div className="mb-3" >
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} id="mybox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#131720' : 'white' }}></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={clearClick}>Clear all</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={selecteClick}>Selecte all</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-3 my-1" onClick={removeSpaceClick}>Remove Extra space</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary </h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0}).length} words, {text.length} charaters</p>
                {/* text.split(" ") use for make array of the string with space  and text.split(/\s+/) use for  split string with space and Enter also  */}
                <h1>Preview</h1>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}


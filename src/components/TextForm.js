import React, {useState} from "react";
// import PropTypes from 'prop-types';

export default function TextForm(props) {
    
    const handleupclick = ()=>{
        //console.log("Clicked");
        let upcase = text.toUpperCase();
        setText(upcase);
        props.showAlert("Upper Case", "success");
    }
    const handlelwclick = ()=>{
        //console.log("Clicked");
        let lwcase = text.toLowerCase();
        setText(lwcase);
        props.showAlert("Lower Case", "success");
    }

    const handleclearclick = ()=>{
        setText('');
        props.showAlert("Clear Text", "success");
    }
    const handlecopy = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied Successfully", "success");
    }
    // const capitazlied = ()=>{
    //     let text = document.getElementById("mybox");
    //     const arr = text.split(" ");
    //     for (var i=0 ; i<arr.length; i++)
    //     {
    //         arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);  
    //     }
    //     const str = arr.join(" ");
    //     setText(str);
    // }
    const handlespace = ()=>{
        let newtext =text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Removed extra space", "success");
    }
    
    const changeevent= (event)=>{
        console.log("Changed");
        setText(event.target.value);
    }


  

    const [text, setText] = useState('');
    return (
        <>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.title}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode==='dark'?'#adbecf':'black'}}>
                    Text Area
                </label>
                <textarea
                    className="form-control"
                    id="mybox"
                    rows="5"
                    value={text}
                    onChange={changeevent}
                    placeholder="Enter text here"
                    style={{backgroundColor:props.mode==='dark'?'#1a242e':'white', color:props.mode==='dark'?'white':'black'}}
                ></textarea>
                <button className="btn btn-outline-secondary mx-2 my-2" onClick={handleupclick}>Convert to Upper Case</button>

                <button className="btn btn-outline-secondary mx-2" onClick={handlelwclick}>Convert to Low Case</button>
                
                <button className="btn btn-outline-secondary mx-2" onClick={handleclearclick}>Clear Text</button>
                <button className="btn btn-outline-secondary  mx-2" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-outline-secondary  mx-2" onClick={handlespace}>Remove Extra Space</button>
                {/* <button className="btn btn-outline-dark  mx-2" onClick={capitazlied}>Capitalized Case</button> */}
            </div>

            <div className="container" style={{color:props.mode==='dark'?'#adbecf':'black'}}>
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} minutes </p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Please enter the text in textbox area"}</p>
            </div>
        </>
    );
}

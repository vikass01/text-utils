import React, { useState } from 'react';
import './Project1.css';


export default function Project1(props) {
    const [text, setText] =useState("");

    function changeUpperCase(){
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase Converted", "success")
    }

    function changeLowerCase(){
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("LowerCase Converted", "success")
    }

    function changeClear(){
      setText("")
      props.showAlert("Text Area Cleared", "success")
    }

    function changecopy(){
      var copyText = document.getElementById("exampleInputEmail1");
      copyText.select();
      copyText.setSelectionRange(0, 99999); 
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text Copied", "success")
    }

    function countChar(){
      const pee = document.getElementById("ptag");
      pee.innerText= "Characters Length is : "+text.length;
      props.showAlert("Character Counting Completed", "success")
    }

    function changeCountWords(){
      const pee = document.getElementById("ptag");
      const newText = text.split(" ");
      pee.innerText = newText.length;
      props.showAlert("Word Count Completed", "success")
    }

    function countLines(){
      const pee = document.getElementById("ptag");
      const lines = text.split('\n'); 
      pee.innerText = lines.length;
      props.showAlert("Line Counting Completing", "success")
    }

    function getReadTime(){
      const pee = document.getElementById("ptag");
      const newText = text.split(" ");
      pee.innerText = 0.5*newText.length+ " Sec";
      props.showAlert("Time Fetched", "success")
    }

    function removeSpace(){
      const newString = text.replace(/\s+/g,' ').trim();
      setText(newString);
      props.showAlert("Extra Space Removed", "success")
    }

    function changeSort(){
      const newtext = text.split( '\n');
      setText(newtext.sort())
      props.showAlert("Text Sorted", "success")
    }

    function changeSortRevers(){
      // const newtext = text.split( '\n');
      // setText(newtext.reverse())
    }

    function changeReplace(){
      const x = prompt("Which Text you want to replace");
      const y = prompt("Enter New Text")
      setText(text.replaceAll(x,y ));
      props.showAlert("Replace Done", "success")
    }

    
    function inputdata(ev){
      console.clear();
      console.log(ev.keyCode);
    }


    function onDataChange(ev){
        setText(ev.target.value);
    }

  return (
    <form id="form1" className='myAlert1' >
      <div className="mb-3" style={{color:`${props.Pagemode === "light" ? "black": "white"}`}}>
        <label htmlFor="exampleInputEmail1" className="form-label">Enter text here</label>
        <textarea type="text" style={{backgroundColor: `${props.Pagemode === "light" ? "white": "#505050"}`, color:`${props.Pagemode === "light" ? "black": "white"}`}} className="form-control" id="exampleInputEmail1" rows = "8" value = {text} onChange={onDataChange} onKeyDown={inputdata} spellCheck="false"/>
      <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
    </div>
  
  <button type="button" className="btn btn-primary" onClick={changeUpperCase}>UpperCase</button>
  <button type="button" className="btn btn-primary" onClick={changeLowerCase}>LowerCase</button>
  <button type="button" className="btn btn-primary" onClick={changeClear}>Clear</button>
  <button type="button" className="btn btn-primary" onClick={changecopy}>Copy</button>
  <button type="button" className="btn btn-primary" onClick={countChar}>Count Characters</button>
  <button type="button" className="btn btn-primary" onClick={changeCountWords}>Count Words</button>
  <button type="button" className="btn btn-primary" onClick={countLines}>Count Lines</button>
  <button type="button" className="btn btn-primary" onClick={getReadTime}>Get Reading Time</button>
  <button type="button" className="btn btn-primary" onClick={removeSpace}>Remove Extra Space</button>
  <button type="button" className="btn btn-primary" onClick={changeSort}>Sort</button>
  <button type="button" className="btn btn-primary" onClick={changeSortRevers}>Sort-Reverse</button>
  <button type="button" className="btn btn-primary" onClick={changeReplace}>Replace-Text</button>
    <br/>
    <br/>
  <p id='ptag'></p>
  </form>
  )
}

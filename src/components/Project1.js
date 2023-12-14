import React, { useEffect, useState } from 'react';
import './Project1.css';


export default function Project1(props) {
  const [text, setText] = useState("");
  const [wcounts, setwcounts] = useState(0)
  const [senten, setsenten] = useState(0)
  const [char, setchar] = useState(0)
  const [rtime, setrtime] = useState(0)
  const [stime, setstime] = useState(0)
  const [lines, setlines] = useState(0)

  useEffect(() => {
    const newText = text.split(" ");
    setwcounts(newText.length - 1);


    const re = /[.!?]/;
    const numOfSentences = text.split(re);
    setsenten(numOfSentences.length - 1);

    setchar(text.length);

    const wpm = 225;
    const time = (wcounts / wpm);
    setrtime(time.toFixed(2) + ' sec');

    const speaktime = 140;
    const estimate = wcounts / speaktime
    setstime(estimate.toFixed(2) + ' sec')


    var table = document.getElementById("exampleInputEmail1");
    var totalRowCount = table.ATTRIBUTE_NODE.rows;
    // var tbodyRowCount = table.tBodies[0].rows.length;
    setlines(totalRowCount);




  }, [text, wcounts])



  function changeUpperCase() {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Uppercase Converted", "success")
  }

  function changeLowerCase() {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase Converted", "success")
  }



  function changeClear() {
    setText("")
    props.showAlert("Text Area Cleared", "success")
  }

  function changecopy() {
    var copyText = document.getElementById("exampleInputEmail1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied", "success")
  }

  function removeSpace() {
    const newString = text.replace(/\s+/g, ' ').trim();
    setText(newString);
    props.showAlert("Extra Space Removed", "success")
  }


  function changeReplace() {
    const x = prompt("Which Text you want to replace");
    const y = prompt("Enter New Text")
    setText(text.replaceAll(x, y));
    props.showAlert("Replace Done", "success")
  }


  function inputdata(ev) {
    // console.clear();
    // console.log(ev.keyCode);
  }


  function onDataChange(ev) {
    setText(ev.target.value);
  }

  function listen() {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance)
    props.showAlert("Its Speaking...........")
  }

  function Stop() {
    speechSynthesis.cancel();
    props.showAlert("Speaking Stopped")
  }

  return (
    <div className='container' style={{backgroundColor: `${props.Pagemode === "light" ? "#22577A" : "#ccc"}`}}>
      <div id="form1" className='myAlert1' >
        <div className="asdf" style={{ color: `${props.Pagemode === "light" ? "black" : "white"}`, backgroundColor: `${props.Pagemode === "light" ? "#FB3640" : "#ccc"}` }} >
          <textarea className='bghyui' type="text" style={{ backgroundColor: `${props.Pagemode === "light" ? "white" : "#505050"}`, 
          color: `${props.Pagemode === "light" ? "black" : "white"}` }} id="exampleInputEmail1" 
          value={text} onChange={onDataChange} onKeyDown={inputdata} spellCheck="false" />
          <div className='bhui'>
            <span style={{ textAlign: 'center' }}>Details:</span>
            <span className='bjio'>Total Sentences : <span className='bjio'>{senten}</span>Read time : <span>{rtime}</span></span>
            <span className='bjio'>Words : <span className='bjio'>{wcounts}</span>Characters : <span>{char}</span></span>
            <span className='bjio'>Speaking Time : <span className='bjio'>{stime}</span>Rows : <span>{lines}</span></span>
            
          </div>
        </div>
        
            <div className='vnbjf' style={{backgroundColor: `${props.Pagemode === "light" ? "#FB3640" : "#ccc"}`}} >
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={changeUpperCase}>UpperCase</button>
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={changeLowerCase}>LowerCase</button>
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={changeClear}>Clear</button>
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={changecopy}>Copy</button>
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={removeSpace}>Remove Space</button>
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={changeReplace}>Replace-Text</button>
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={listen}>Listen Now</button>
              <button type="button" className="btn" style={{width:150, backgroundColor:'#6c757d', color:'#fff'}} onClick={Stop}>Listen Stop</button>
            </div>
            <div id="emailHelp" className="form-text">
            <p style={{textAlign:'center'}}>We'll never share your data with anyone else.</p>
            <p style={{textAlign:'center'}}>@ Project by Vikas Panchal,Opensourced for non-commercial purposes only.</p>
            </div>
            

      </div>
    </div>
  )
}



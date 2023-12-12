import React, { useEffect, useState } from 'react';
import './Project1.css';


export default function Project1(props) {
    const [text, setText] =useState("");
    const [wcounts, setwcounts] = useState(0)
    const [senten, setsenten] = useState(0)
    const [char, setchar] = useState(0)
    const [rtime, setrtime] = useState(0)
    const [stime, setstime] = useState(0)
    const [lines, setlines] = useState(0)

    useEffect(()=>{
      const newText = text.split(" ");
      setwcounts(newText.length-1);

      
      const re = /[.!?]/;
      const numOfSentences = text.split(re);
      setsenten(numOfSentences.length - 1);
        
      setchar(text.length);

      const wpm = 225;
      const time = (wcounts / wpm);
      setrtime(time.toFixed(2)  +' sec');

      const speaktime = 140;
      const estimate = wcounts / speaktime
      setstime(estimate.toFixed(2)+ ' sec')


      var table = document.getElementById("exampleInputEmail1");
      var totalRowCount = table.ATTRIBUTE_NODE.rows;
      // var tbodyRowCount = table.tBodies[0].rows.length;
      setlines(totalRowCount);
      


      
    },[text, wcounts])

    

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

    function removeSpace(){
      const newString = text.replace(/\s+/g,' ').trim();
      setText(newString);
      props.showAlert("Extra Space Removed", "success")
    }


    function changeReplace(){
      const x = prompt("Which Text you want to replace");
      const y = prompt("Enter New Text")
      setText(text.replaceAll(x,y ));
      props.showAlert("Replace Done", "success")
    }

    
    function inputdata(ev){
      // console.clear();
      // console.log(ev.keyCode);
    }


    function onDataChange(ev){
        setText(ev.target.value);
    }

  return (
    <form id="form1" className='myAlert1' >
      <label htmlFor="exampleInputEmail1" className="form-label">Enter text here</label>
      <div className="mb-3" style={{color:`${props.Pagemode === "light" ? "black": "white"}`, display:'flex', gap:10}}>
        
        <textarea type="text" style={{backgroundColor: `${props.Pagemode === "light" ? "white": "#505050"}`, borderColor:'#6c757d', width:'67%', color:`${props.Pagemode === "light" ? "black": "white"}`}} className="form-control" id="exampleInputEmail1" rows = "8" value = {text} onChange={onDataChange} onKeyDown={inputdata} spellCheck="false"/>
        <div style={{display:"flex", flexDirection:'column', marginBottom:10, 
      backgroundColor:'#6c757d', width:'20%', height:'100%', borderRadius:10, color:'#fff', padding:5, gap:12}}>
        <span style={{textAlign:'center'}}>Details:</span>
        <span>Total Sentences : <span>{senten}</span></span>
        <span>Read time : <span>{rtime}</span></span>
        <span >Words : <span>{wcounts}</span></span>
        <span>Characters : <span>{char}</span></span>
        <span>Speaking Time : <span>{stime}</span></span>
        <span>Rows : <span>{lines}</span></span>
      </div>
      
    </div>
    <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
  <div style={{display:"flex", justifyContent:'start' ,flexWrap:'wrap',  marginBottom:10, 
      borderRadius:10,  padding:5}}>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={changeUpperCase}>UpperCase</button>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={changeLowerCase}>LowerCase</button>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={changeClear}>Clear</button>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={changecopy}>Copy</button>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={removeSpace}>Remove Extra Space</button>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={changeReplace}>Replace-Text</button>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={removeSpace}></button>
  <button type="button" className="btn" style={{width:200, backgroundColor:'#6c757d'}} onClick={changeReplace}></button>
    <br/>
    <br/>
  
  </div>
  <p id='ptag'></p>
  </form>
  )
}



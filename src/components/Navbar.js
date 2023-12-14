
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';







export default function Navbar(props) {
  const [progress, setProgress] = useState(0)  

  return (
    <>
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
      <br /> */}
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: `${props.Pagemode === "light" ? "#22577A" : "#ccc"}`}}  >
    
        {/* <div style={{backgroundColor:'green'}}>Text-Utils</div> */}
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} className="form-check form-switch switchh" onClick={props.toggleMode}>
              <div style={{marginRight:60, position:'relative', top:4}}><h2 className={`${props.Pagemode === "light" ? "text-dark": "text-light"}`}>Text-Utils</h2></div>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" aria-checked="true"/>
              <label className={`form-check-label ${props.Pagemode === "light" ? "text-dark": "text-light"}`} htmlFor="flexSwitchCheckDisabled"></label>
        </div>
  
</div>
    
    </>
  )
}


const styles = {
 
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:'center',
    backgroundColor:'yellow',
    width:'80%',
    height:'100%',

  
} 



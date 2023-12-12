
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
    <nav className={`navbar navbar-expand-lg fixed-top bg-body-dark navbar-${props.Pagemode} bg-${props.Pagemode}`} >
    <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{marginLeft:190, fontSize:24}}>Text-Utils</Link>
    <div className="collapse navbar-collapse bbb" id="navbarSupportedContent">
      <form className="d-flex" role="search" style={{position:'absolute', right:100 }}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={{marginRight:30}}>Search</button>
        <div className="form-check form-switch switchh" onClick={props.toggleMode}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" aria-checked="true"/>
          <label className={`form-check-label ${props.Pagemode === "light" ? "text-dark": "text-light"}`} htmlFor="flexSwitchCheckDisabled">DarkMode</label>
        </div>
      </form>
    </div>
  </div>
</nav>
    
    </>
  )
}

// Navbar.propTypes = {
//     logoName : PropTypes.string,
// }

// Navbar.defaultProps = {
//     logoName : "Vikas",
//     about : "Dharra"
// }



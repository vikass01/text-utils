
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
    <Link className="navbar-brand" to="/">Text-Utils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bbb" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={() => setProgress(100)}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" onClick={() => setProgress(100)}>About</Link>
        </li>
       
            <li><Link className="nav-link" aria-current="page" to="/business" onClick={() => setProgress(100)}>Business</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/entertainment" onClick={() => setProgress(100)}>Entertainment</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/general" onClick={() => setProgress(100)}>General</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/health" onClick={() => setProgress(100)}>Health</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/science" onClick={() => setProgress(100)}>Science</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/sports" onClick={() => setProgress(100)}>Sports</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/technology" onClick={() => setProgress(100)}>Technology</Link></li>
        
        <li className="nav-item">
          <a className="nav-link" href='/'>LOGIN</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
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



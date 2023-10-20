
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Project1 from './components/Project1';
import About from './components/About';
import Business from './components/Business';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(false);

  function showAlert(message, type){
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(false)
    }, 1500);

  }

  function toggleMode (){
    if (Mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled" , "success !")
      setInterval(() => {
        document.title = "Text Utils is amazing Tool"
      }, 1000);

      setInterval(() => {
        document.title = "Install Text Utils Fast"
      }, 1500);

    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled" , "success !")
    }
  }

 

  return (
    <Router>
    <Navbar Pagemode = {Mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>

    <Routes>
          			<Route exect path="/about" element={<About />} />
          			<Route exect path="/" element={<Project1 showAlert= {showAlert} Pagemode = {Mode}/>} />
                <Route exect path="/business" element={<Business key="business" category = 'business'/>} />
                <Route exect path="/entertainment" element={<Business key="entertainment" category = 'entertainment'/>} />
                <Route exect path="/general" element={<Business key="general" category = 'general'/>} />
                <Route exect path="/health" element={<Business key="health" category = 'health'/>} />
                <Route exect path="/science" element={<Business key="science" category = 'science'/>} />
                <Route exect path="/sports" element={<Business key="sports" category = 'sports'/>} />
                <Route exect path="/technology" element={<Business key="technology" category = 'technology'/>} />               
        		</Routes>

    </Router>
    
  );
}

export default App;


import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Project1 from './components/Project1';


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
          			
          			<Route exect path="/" element={<Project1 showAlert= {showAlert} Pagemode = {Mode} toggleMode = {toggleMode}/>} />
                
                              
        		</Routes>

    </Router>
    
  );
}

export default App;

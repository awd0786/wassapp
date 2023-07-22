// import logo from './hs.png';
import React,{useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {BrowserRouter, Route,Routes} from "react-router-dom";



function App() {
  const [mode, setMode]= useState ('light');
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1900);
  }


  const togglemode = () =>{
    if (mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#1a242e';
      showAlert("Dark Mode Enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled", "success");
    }
  }


  return (
    <>
       <BrowserRouter>
      <Navbar title="WassApp" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
      <Routes>
          <Route exact path="/about" element={<About/>}>
         </Route>
          <Route exact path="/" element={<TextForm title="Viaan Form" mode={mode} showAlert={showAlert}/>}>
          </Route>
          </Routes>
        </div>
          </BrowserRouter> 
        {/* <Navbar title="WassApp" aboutus="About Us" mode={mode} togglemode={togglemode}/>
        <TextForm title="Viaan Form" mode={mode} showAlert={showAlert}/> */}

    </>
  );
}

export default App;

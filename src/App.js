// import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#131720'
      document.body.style.color = 'white';
      showAlert("Dark mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode Enabled", "success");
    }
  }

  return (
    <>

      {/* <Navbar title="Text" about="About" /> */}
      {/* <Navbar /> */}
      {/* title and heading is use with the help of props only*/}

      <BrowserRouter>
        <Navbar title="Text Converter" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm heading="Enter the Text to analyze" mode={mode} showAlert={showAlert} />} />
            <Route path='/about' element={<About mode={mode} />} /> 
          </Routes> 
        </div>  
      </BrowserRouter>
    </>
  );
}

export default App;

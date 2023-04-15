import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavDirect from "./components/NavDirect.js"
import MainSect from "./components/MainSect.js"
import './styles.css'

const App = () =>{
  
  return (
    <div>
   <NavDirect/>
      <Routes>
        <Route path="/" element={ <MainSect/> } />
        <Route path="/home" element={ <MainSect/> } />
      </Routes>
    </div>
  );
}


export default App;

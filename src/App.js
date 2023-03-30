import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavDirect from "./NavDirect.js"
import MainSect from "./MainSect.js"

const App = () =>{
  return (
    <div>
      <NavDirect/>
      <Routes>
        <Route path="/" element={ <MainSect/> } />
      </Routes>
    </div>
  );
}

export default App;

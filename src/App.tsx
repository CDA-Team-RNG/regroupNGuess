import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import {GamblePage} from "./pages/GamblePage";
import {HomePage} from "./pages/HomePage";
import {ResultPage} from "./pages/ResultPage";

function App() {
  return (
    <>
     <Router>
 <Routes>
        <Route path="/" element = {<HomePage />}  />       
        <Route path="/gamble" element = {<GamblePage />} />         
        <Route path="/result" element={<ResultPage />}/>      
 </Routes>
    </Router>

   
    </>
  );
}

export default App;
